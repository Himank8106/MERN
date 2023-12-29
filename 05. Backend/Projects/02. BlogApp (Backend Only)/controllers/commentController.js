const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req,res) => {
    try{
        // fetch data from req body
        const {post, user, body} = req.body;

        // create a comment object
        const comment = new Comment({
            post, user, body
        })

        // save new comment into database
        const saveComment = await comment.save();

        // Find the Post By Id and add new comment to its comment array 
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: saveComment._id}}, {new:true})
        .populate('comments') // populate comments arraywith comment documents
        .exec();

        res.json({
            message: "Comment added successfully",
            post: updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            err: "Error while adding comment"
        })
    }
}

