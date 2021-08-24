console.log("hello world");

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
})
app.get('/page-2', function(req, res) {
    res.send("This is page 2 of my express hello-world website")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
