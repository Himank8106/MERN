const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// signup route handler
exports.signup = async (req,res) => {
    try{
        // get data 
        const {name, email, password, role} = req.body;

        //check if user already exist
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({
            success: false,
            message: "User Already Exists"
        });

        // secure (hash) password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(error){
            return res.status(500).json({
                success: false,
                message: "Password hashing failed"
            });
        }

        // create entry for user
        const user = await User.create({
            name, email, password: hashedPassword, role
        })

        return res.status(200).json({
            success: true,
            message: "User created successfully",
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User can not be registered, try again"
        });
    }
}

// login route handler
exports.login = async (req,res) => {
    try {
        // data fetch
        const {email, password} = req.body;

        // validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and Password required"
            });
        }

        // check if user exists
        let user = await User.findOne({email});

        // if not a registered user
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not registered"
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        }

        // verify password and generate jwt token
        if(await bcrypt.compare(password, user.password)){
            // password matched
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });

            // cookie
            user = user.toObject(); 
            user.token = token;
            user.password = undefined; 

            const options = {
                expires: new Date(Date.now()+3*24*60*60*1000), // 3 days
                httpOnly: true // so that cookie can not be accessed by client side script
            }

            res.cookie("myCookie", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully"
            });
            
        }
        else{
            // password not matched
            return res.status(403).json({
                success: false,
                message: "Password is incorrect"
            })
        }
    } 
    catch (error) {
        console.error(error)
        return res.status(500).json({
            success : false,
            message : "Login failed" 
        })
    }
};