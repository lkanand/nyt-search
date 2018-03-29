const router = require("express").Router();
const newsRoutes = require("./news");
const commentsRoutes = require("./comments")

router.use("/news", newsRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;