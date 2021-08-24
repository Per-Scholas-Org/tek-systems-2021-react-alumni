var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});
app.get('/index', function (req, res) {
    res.send("<h1>We're on the index page!");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
