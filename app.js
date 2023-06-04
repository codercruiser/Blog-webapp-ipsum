const express = require("express");
const bodyParser = require("body-parser");
const Date = require(__dirname + "/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
let day = Date.getDate();

app.get('/', function(req, res) {
  res.render('home.ejs', {
    date: day
  });
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.get("/post", function(req, res) {
  res.render("post.ejs");
});

app.listen(port, function() {
  console.log(day);
  console.log(`server started on port ${port}`);
});
