const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const todos = [];
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  res.render("homepage.ejs", { todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.Todo);
  res.redirect("/");
});

app.delete("/del/:index", function (req, res) {
  console.log(req.params.index);
  todos.splice(req.params.index, 1);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("server is listening at port 3000");
});
