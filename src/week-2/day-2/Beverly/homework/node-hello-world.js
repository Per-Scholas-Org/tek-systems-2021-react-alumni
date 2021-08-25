var http = require('http');
var hostname = '127.0.0.1';
var port = 9000;
var server = http.createServer(function (req, res) {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Node-Hello-World! Beverly');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
