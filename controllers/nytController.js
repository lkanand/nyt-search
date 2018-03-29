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
	} 
};