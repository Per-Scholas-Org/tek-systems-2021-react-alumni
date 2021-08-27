console.log("This is Express Hello World: ");
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!!!!!!');
});
app.get('/page-2', function (req, res) {
    res.send("This is Page 2 of my express Hello-World Website!");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
