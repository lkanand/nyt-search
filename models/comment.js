const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	body: {
		type: String
	},
	commentCreated: {
		type: Date,
		default: Date.now
	}
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;