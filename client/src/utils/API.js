import axios from "axios";

var apiKey = "9fa240ad4161445491b14eed92d7c864";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export default {
	getArticles: function(keywords, startDate, endDate) {
		url += "?api-key=" + apiKey + "&q=" + keywords + "&begin_date=" + startDate.split("-").join("") + "&end_date=" + endDate.split("-").join("");
		return axios.get(url);
	},

	findArticle: function(nytId) {
		return axios.get("/api/news/" + nytId);
	},

	saveArticle: function(article) {
		return axios.post("/api/news/", article);
	},

	deleteArticle: function(nytId) {
		return axios.delete("/api/news/" + nytId);
	},

	getSavedArticles: function() {
		return axios.get("/api/news/");
	},

	submitComment: function(data) {
		return axios.post("/api/comments/", data);
	},

	getArticleComments: function(articleId) {
		return axios.get("/api/comments/" + articleId);
	},

	deleteComment: function(data) {
		return axios.put("/api/news/" + data.articleId, data);
	}
};

