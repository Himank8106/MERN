const mongoose = require("mongoose");

// route handler
const likeSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // reference to Post model
    },
    user: {
        type: String,
        required: true,
    },
});

// Export
module.exports = mongoose.model('Like', likeSchema);