// node.js imports
import fs from 'fs';
import path from 'path';

// npm module imports
import express from 'express';

// src code imports
import { getPort } from './config-info';

console.log('hi');

const app = express();
const PORT = getPort();

// set where express looks for view templates
const viewPath = path.join(__dirname, "../src/views/pages");
console.log('View path is ', viewPath);

app.set("views", viewPath);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

const NAMES_LIST_PATH = './resources/names-list.txt';

// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.
app.get('/names', (req, res) => {
  fs.readFile('./resources/names-list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const queryParamsString = JSON.stringify(req.query);
    console.log(queryParamsString);

    const namesArray = data.split('\n');

    // If no name in query param, list all the names
    if(!req.query.name) {
      res.render('names', { names: namesArray });
    }

    else {
      const desiredName =namesArray.find(name => {
        return name.toLowerCase() == req.query.name;
      })
      res.render('names', { names: [desiredName] });
    }

  })
});

const STUDENTS_ROUTE = '/students';

app.get(STUDENTS_ROUTE, (req, res) => {
  fs.readFile(NAMES_LIST_PATH, 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const namesArray = data.split('\n');
    res.render('names', { names: namesArray });
  })
});

// TODO: Crreate a view page for each student. So each student has their own page
app.get(`${STUDENTS_ROUTE}/:name`, (req, res) => {
  const params = req.params;
  console.log(params);
  fs.readFile(NAMES_LIST_PATH, 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const namesArray = data.split('\n');

    if(!params) {
      res.send('no name')
    }

    else {
      const desiredName =namesArray.find(name => {
        return name.toLowerCase() == params.name;
      })
      res.render('names', { names: [desiredName] });
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
