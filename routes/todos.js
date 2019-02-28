var express = require("express");
var router = express.Router();
var connect = require("../connect");

let db;

connect("ToDoList").then(database => {
  db = database;
  app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
});

/* GET Todo's list. */
router.get("/", function(req, res, next) {
  res.render("todos", { title: "To-do List" });
});

module.exports = router;
