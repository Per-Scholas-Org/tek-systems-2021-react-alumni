"use strict";
exports.__esModule = true;
var http = require("http");
var port = 9999;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write('<p>Hello world! This is my node app.<p>');
    res.end();
});
server.listen(port, function () {
    console.log("Server running on port " + port);
});
