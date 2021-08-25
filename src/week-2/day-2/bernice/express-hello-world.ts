const express = require('express');

//create web server app
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    //send the body of http response
    res.send('Hello World! This is my express app.');
});

app.get('/page-2', (req, res) => {
    res.send('This is page two!');
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
 });
