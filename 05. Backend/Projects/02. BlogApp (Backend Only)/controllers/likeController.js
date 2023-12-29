const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post
exports.likePost = async (req, res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user
        })
        const saveLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: saveLike._id}}, {new:true}) .populate("likes")
        .exec();;

        res.json({
            post: updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            err: "Error while liking post"
        })
    }
}

// Unlike a post
exports.unlikePost = async (req, res) => {
    try {
      const { post, like } = req.body;
  
      // find and delete the from like collection
      const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
  
      // update the post collection
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deletedLike._id } },
        { new: true }
      );
  
      res.json({
        post: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Error While unLike Post",
      });
    }
  };
  