var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/page2", function (req, res) {
  res.send("Page Two!");
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:" + port);
});
