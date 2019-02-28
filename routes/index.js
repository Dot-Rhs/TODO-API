var express = require("express");
var router = express.Router();

/* GET Todo home page. */
router.get("/", function(req, res, next) {
  res.render("todos", { title: "To-do List" });
});

module.exports = router;
