// import schema 
const Todo = require('../models/Todo');

// define route handler
exports.createTodo = async (req,res) => {
    try{
        //extract title and description from request body
        const {title, description} = req.body;
        // create a new todo object and insert in db
        const response = await Todo.create({title, description});
        // send success response with newly created todo
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Todo created successfully"
            }
        )
    } 
    catch(error){
        console.error(error.message);
        res.status(500).json(
            {
                success: false,
                data: "Internal Server Error",
                message: error.message
            }
        )
    }
}