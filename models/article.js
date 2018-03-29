const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	nytId: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
	},
	link: {
		type: String,
		required: true
	},
	summary: {
		type: String
	}, 
	datePublished: {
		type: String
	},
	dateSaved: {
		type: Date,
		default: Date.now
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comment"
		}	
	]
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
