import * as http from 'http';

const port = 9999;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.write('<p>Hello world! This is my node app.<p>');
    res.end();
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});