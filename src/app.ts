// Node.js http module - part of Node.js standard libary. Express uses it under the hood.
//const http = require('http')

// es6 module import
import express from 'express';

console.log('hi');

// create our webserver
const app = express();

// the port our webserver will listen on.
const PORT = 8888;

const BASE_PATH = '/';

// GET used to get information - should never modify state. 
// For example a GET request should never modify information in a databse.
// A GET request would be used to get information about a user from a database.
app.get(BASE_PATH, (req, res) => {
  res.send(`HTTP ${req.method} request received at ${BASE_PATH}`);
});

// POST used to add new information 
// For example a POST request would be used to create a new user account on the database..
app.post(BASE_PATH, (req, res) => {
  res.send(`HTTP ${req.method} request received at ${BASE_PATH}`);
})

// PUT used to update existing information.
// For example a PUT request would be used to change a users name in the database.
app.put(BASE_PATH, (req, res) => {
  res.send(`HTTP ${req.method} request at ${BASE_PATH}`);
})

// DELETE used to delete existing information.
// For example a DELETE request would be used to delete a user account.
app.delete(BASE_PATH, (req, res) => {
  res.send(`HTTP ${req.method} request received at ${BASE_PATH}`);
})

// Started the server and told it what port to listen
// We passed in an arrow function as a callback - the callback is executed when 
// the server receives a request on that port.
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
