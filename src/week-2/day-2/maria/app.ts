import { BADSTR } from "dns";

console.log("hello world");

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 9999;
const BASE_PATH = '/names';
/* fs.readFile("./resources/test.txt", "utf8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data);
} */

let data = "maria adam michael raheem";


app.get(BASE_PATH, (req, res) => {
    const queryParamsString = JSON.stringify(req.query);
    let desiredName = "";
    if(!req.query.name){
        res.send("No query param for a name")
    }
    else(req.query.name)
    {
        desiredName = data
        .split(' ')
        .find(name => name == req.query.name)
    }
    res.send(`${req.method} request received at ${req.url}. Query params are ${queryParamsString} Name is ${desiredName}`);
})

// put - if there is a query.name => add name to the data
app.put(BASE_PATH, function(req, res) {
    if(!req.query.name)
    {
        res.send("No query name parameter")
    }
    else if(data.split(' ').some(name => name === req.query.name)){
        res.send(`${req.query.name} is already a part of the data`);
    }
    else{
        data += " "+ req.query.name;
        res.send(`${req.query.name} has been successfully added to data`);
        console.log(data);
    }
})
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
