var express = require("express");
var router = express.Router();
var connect = require("../connect");

let db;

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("todos", { title: "To-do List" });
// });

router.get("/", function(req, res, next) {
  db.collection("Items")
    .find({})
    .toArray(function(err, docs) {
      if (err) return next(err);
      // docs.each(function(err, doc) {
      //   if (doc) {
      //     console.log(doc);
      res.json({ "Your list": docs });
      //   }
      // });
    });
});

router.post("/", function(req, rest, next) {
  var addItem = db.collection("Items");
  addItem.insert({
    title: "Get out my car, who are you???", //req.body.title
    completed: false //req.body.completed
  });
});

connect("ToDoList").then(database => {
  db = database;
});

module.exports = router;
