const router = require("express").Router();
const nytController = require("../../controllers/nytController");

router.route("/")
	.post(nytController.submitComment);

router.route("/:id")
	.get(nytController.getArticleComments);

module.exports = router;