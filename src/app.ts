import express, { response } from 'express';
import fs from 'fs';

console.log('hi');

const app = express();
const PORT = 9999;

// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.

app.get("/", (req, res)=> {
  res.send("HELLO")
})

app.get('/names', (req, res) => {
  fs.readFile('./resources/names-list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const queryParamsString = JSON.stringify(req.query);
    console.log(queryParamsString);

    let desiredName = "";

    if(!req.query.name) {
      res.send('No query param for a name');
    }

    else {
      console.log('name query param is ', req.query.name);
      const dataAsArray = data.split('\n');
      // TODO: Get req.query.name from datasArray  and return it in res.send()

      let desirdName = "";
      res.send(`Found name: ${desiredName}`)
    }
  })
});

app.post('/names', (req, res) => {
  res.send(`HTTP ${req.method} request received at ${req.url}`);
})

// IMPORTANT: YOU WILL NEED TO USE POSTMAN TO TEST THIS 
// If there is a query param "name", add the name to the end of the file
app.put('/names', (req, res) => {
  res.send(`HTTP ${req.method} request at ${req.url}`);
})

app.delete('/names', (req, res) => {
  res.send(`HTTP ${req.method} request received at ${req.url}`);
})

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
