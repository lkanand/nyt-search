const router = require("express").Router();
const nytController = require("../../controllers/nytController");

router.route("/:id")
	.get(nytController.findById)
	.delete(nytController.deleteArticle);

router.route("/")
	.get(nytController.getSavedArticles)
	.post(nytController.insertSavedArticle);

module.exports = router;