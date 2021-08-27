
let express = require('express');
let fs = require('fs');

console.log('hi');

const app = express();
const PORT = 8888;

// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.
app.get('/names', (req, res) => {
  fs.readFile('../resources/names-list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const queryParamsString = JSON.stringify(req.query);
    console.log(queryParamsString);

    if(!req.query.name) {
      res.send('No query param for a name');
    }

    else {
      console.log('name query param is ', req.query.name);
      const dataAsArray = data.split('\r\n');
      // TODO: Get req.query.name from datasArray  and return it in res.send()
      dataAsArray.some(name => req.query.name == name) ? res.send(`Found name: ${req.query.name}`) : res.send(`${req.query.name} not found`);
    }
  })
});

app.post('/names', (req, res) => {
  res.send(`HTTP ${req.method} request received at ${req.url}`);
})

// IMPORTANT: YOU WILL NEED TO USE POSTMAN TO TEST THIS 
// If there is a query param "name", add the name to the end of the file
app.put('/names', (req, res) => {
  fs.readFile('../resources/names-list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    if(!req.query.name) {
      res.send('No query param for a name');
    }
    else {
      console.log('name query param is ', req.query.name);
      const dataAsArray = data.split('\r\n');
      // TODO: Get req.query.name from datasArray  and return it in res.send()
      dataAsArray.some(name => req.query.name == name) ? 
      res.send(`The file already contains ${req.query.name}`) : 
      fs.writeFile('../resources/names-list.txt',("\r\n" + req.query.name), {flag: 'a+'}, err => {console.log(err)});
      res.send(`${req.query.name} has successfully been added to the list of names`);
    }

  })
})

app.delete('/names', (req, res) => {
  res.send(`HTTP ${req.method} request received at ${req.url}`);
})

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
