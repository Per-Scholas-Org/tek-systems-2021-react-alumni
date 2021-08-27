const express = require('express');

// create our webserver
const app = express();

// the port our webserver will listen on
const port = 3000;

app.get('/', (req   , res) => {
    res.send('Hello World!!');
});

// started the server and told it what port to listen
// we passed in an arrow function as a callback - the callback is executed when
// the server receives a request on that port
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});

