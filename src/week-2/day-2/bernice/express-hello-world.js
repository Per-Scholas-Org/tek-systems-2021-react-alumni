var express = require('express');
//create web server app
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    //send the body of http response
    res.send('Hello World!');
});
app.get('/page-2', function (req, res) {
    res.send('This is page two!');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
