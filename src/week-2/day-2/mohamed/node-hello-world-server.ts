const http=require('http');
const port=9999;
const server=http.createServer((req,res)=>{
    console.log('!!Incoming Request!!')
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, world!</h1>');
});

server.listen(port,"localhost",()=>{console.log(`Server rnning at port ${port}`)});