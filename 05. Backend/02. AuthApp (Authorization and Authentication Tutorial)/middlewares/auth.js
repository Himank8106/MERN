const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/User");

// can check your access by using your token and send it in get request (you can get your token by login (from postman))

// Authentication Middleware
exports.auth = (req, res, next) => {
    try{

        // We can extract jwt token from 3 places

        // extract jwt token from header - Most safe way
        // const token = req.headers.authorization.split(" ")[1];

        // extract jwt token from cookie
        // const token = req.cookies.token;

        // extract jwt token from body - Avoid this method
        // const token = req.body.token;

        // Can apply all 3 methods -
        console.log("cookie", req.cookies.token);
        console.log("body", req.body.token);
        console.log("header", req.header("Authorization"));

        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer","");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing"
            })
        }

        // verify token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            req.user = payload;
        }
        catch(error){
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }
        next();
    } catch(error){
        console.log(error)
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying token"
        })
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success: false,
                message: "This is a protect route for students. You can not access it."
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching"
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is a protect route for admin. You can not access it."
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching"
        })
    }
}

