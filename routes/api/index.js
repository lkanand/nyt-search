const router = require("express").Router();
const newsRoutes = require("./news");

router.use("/news", newsRoutes);

module.exports = router;