//import th model
const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res) => {
    try{
       const {id} = req.params;

       await Todo.findByIdAndDelete(id);

       res.json({
        success: true,
        message: "ToDo Deleted"
       })
    } 
    catch(error){
        console.error(error.message);
        res.status(500).json(
            {
                success: false,
                error: error.message,
                message: "Server Error"
            }
        )
    }
}