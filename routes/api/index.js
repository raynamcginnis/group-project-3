const router = require("express").Router();
const bookRoutes = require("./books");

// Cheatsheets routes
router.use("/books", bookRoutes);

module.exports = router;
