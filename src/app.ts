import express, { response } from 'express';
import fs from 'fs';

console.log('hi');

const app = express();
const PORT = 8888;

// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.
app.get('/names', (req, res) => {
  fs.readFile('./resources/names-list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // successfully got file data
    const responseBody = `HTTP ${req.method} request received at ${req.url}. Names are ${data}`;


    res.write("hello");
    res.write("world");
    res.end();

    // does same as above
    res.send("hello world")

    //res.send(responseBody);
  })
});

app.post('/', (req, res) => {
  res.send(`HTTP ${req.method} request received at ${req.url}`);
})

app.put('/', (req, res) => {
  res.send(`HTTP ${req.method} request at ${req.url}`);
})

app.delete('/', (req, res) => {
  res.send(`HTTP ${req.method} request received at ${req.url}`);
})

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
