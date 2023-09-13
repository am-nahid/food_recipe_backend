const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// const commentSchema = new mongoose.Schema({
//   user_id: { type: ObjectId, ref: 'User' }, 
//   name: String,
//   user_comment: String,
//   commentTimestamp: Date, 
// });

const commentsSchema = new mongoose.Schema({
    comment: {type: String, required:true},
    user_id: { type: ObjectId, ref: "User" },
    name: {type: String, required:true},
    recipeName: {type: String, required:true},
    commentTimestamp:{type: Date, required:true},
    recipe:{type: Array, required:true}
})

// const commentsSchema = new mongoose.Schema({
//   recipeName: String,
//   comments: [commentSchema], 
// });

const Comments = mongoose.model('comments', commentsSchema);

module.exports = Comments;
