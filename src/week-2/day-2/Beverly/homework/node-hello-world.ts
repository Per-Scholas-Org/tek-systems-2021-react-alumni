const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('Node-Hello-World! Beverly');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});