const router = require("express").Router();
const nytController = require("../../controllers/nytController");

router.route("/:id")
	.get(nytController.findById)
	.delete(nytController.deleteArticle)
	.put(nytController.deleteComment);

router.route("/")
	.get(nytController.getSavedArticles)
	.post(nytController.insertSavedArticle);

module.exports = router;