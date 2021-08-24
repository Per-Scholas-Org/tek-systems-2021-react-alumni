var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Beverly said: Hello World!');
});
app.listen(port, function () {
    console.log("Beverly's example app listening at http://localhost:" + port);
});
