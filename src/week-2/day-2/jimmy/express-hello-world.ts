const express = require('express');

// create our web server app
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    // send the body of our http response
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`Example app listening at http://`);
})