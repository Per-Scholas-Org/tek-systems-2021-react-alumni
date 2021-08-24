var express = require('express');
var app = express();
var port = 3000;
//create our web server app
app.get('/', function (req, res) {
    //send the body to our http response
    res.send('Hello World!');
});
app.get('/page-two', function (req, res) {
    //send the body to our http response
    res.send('Welcom in page 2!');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
