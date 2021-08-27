var http = require('http');
//import http from 'http';
var hostname = '127.0.0.1';
var port = 9999;
// const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//     res.statusCode = 200;
//     res.setHeader('content-type', 'text/html');
//     res.write('<h1>hello world!!!!</h1>');
//     res.end();
// })
var server = http.createServer(function (req, res) {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Node-Hello-World!!!!');
});
server.listen(port, hostname, function () {
    console.log("Server Running On Port: " + port);
    console.log("Server Running at http://" + hostname + ":" + port + "/");
});
