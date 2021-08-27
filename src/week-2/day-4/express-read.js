var fs = require('fs');
var express = require('express');
var app = express();
var port = 8888;
fs.readFile('name.txt', 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    //console.log(data)
    app.get('/', function (req, res) {
        res.send(data);
    });
    app.listen(port, function () {
        console.log("Example app listening at http://localhost:" + port);
    });
});
