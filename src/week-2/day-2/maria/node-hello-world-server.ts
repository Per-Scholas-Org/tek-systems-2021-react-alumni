//const http = require('http');
import http from 'http';

const port = 9999;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write('<h1>hello world!</h1>');
    res.end();
})

server.listen(port, () => {
    console.log(`server running on port ${port}`);
})
