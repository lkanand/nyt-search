const db = require("../models");

module.exports = {
	findById: function(req, res) {
		db.Article.findOne({nytId: req.params.id}).then(article => res.json(article)).catch(err => res.json("error"));
	},

	insertSavedArticle: function(req, res) {
		let article = req.body;
		db.Article.create({	
			nytId: article._id,
			title: article.headline.main,
			author: article.byline.original,
			link: article.web_url,
			summary: article.snippet,
			datePublished: article.pub_date
		}).then(result => res.json("success")).catch(err => res.json("failure"));
	},

	deleteArticle: function(req, res) {
		db.Article.remove({nytId: req.params.id}).then(response => res.json("success")).catch(err => res.json("failure"));
	},

	getSavedArticles: function(req, res) {
		db.Article.find({}).sort({dateSaved: "descending"}).then(response => res.json(response)).catch(err => res.json("failure"));
	},

	submitComment: function(req, res) {
		let newComment = req.body.comment;
		let articleId = req.body.id;
		db.Comment.create({
			body: newComment
		}).then(addedComment => {
			db.Article.update({_id: articleId}, {
				$push: {
					comments: addedComment._id
				}
			}).then(article => res.json(addedComment)).catch(err => res.json("failure"));
		}).catch(err => res.json("failure"));
	},

	getArticleComments: function(req, res) {
		db.Article.findOne({_id: req.params.id}).populate("comments")
		.then(result => res.json(result.comments)).catch(err => res.json("failure"));
	},

	deleteComment: function(req, res) {
		db.Comment.remove({_id: req.body.commentId}).then(function(removedComment){
			db.Article.update({_id: req.params.id}, {
				$pull: {
					comments: req.body.commentId
				}
			}).catch(function(err){
				res.json(err);
			});
			res.json("success");
		}).catch(function(error){
			res.json(error);
		});
	}
};