// import express, { response } from 'express';
// import fs from 'fs';
const express = require('express');
const fs = require('fs');

console.log('hi');

const app = express();
const PORT = 9999;

// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.
// To use req.query.name use ?+name => http://localhost:9999/names?name=johnathan
app.get('/names', (req, res) => {
  fs.readFile('../resources/names-list.txt', 'utf8' , (err, data) => {
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
      console.log(dataAsArray);

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
// to use this put request, type your input after the name and slash http://localhost:9999/names/johnathan
app.put('/names/:name', (req, res) => {
  let newData = '\n' + req.params.name;
  fs.appendFile('../resources/names-list.txt', newData, function (err) {
    if (err) {
      // append failed
      console.log(`Failed to add ${newData} to text file`)
    } else {
      // done
      console.log(`${newData} has been added to text file`);

    }
  })
  // fs.writeFile('../resources/names-list.txt', newData, err => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   //file written successfully
  //   console.log(`${newData} has been added to file`);
  // });

  res.send(`HTTP ${req.method} request at ${req.url}`);
})

app.delete('/names/:name', (req, res) => {
  
  fs.readFile('../resources/names-list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let newValue = data.replace(req.params.name, '');
    fs.writeFileSync('../resources/invited-name-list.txt', newValue, 'utf-8');
    res.send(`HTTP ${req.method} request received at ${req.url}`);
  });
})

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
