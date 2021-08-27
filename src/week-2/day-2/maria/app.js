"use strict";
exports.__esModule = true;
console.log("hello world");
var express = require('express');
var fs = require('fs');
var app = express();
var PORT = 9999;
var BASE_PATH = '/names';
/* fs.readFile("./resources/test.txt", "utf8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data);
} */
var data = "maria adam michael raheem";
app.get(BASE_PATH, function (req, res) {
    var queryParamsString = JSON.stringify(req.query);
    var desiredName = "";
    if (!req.query.name) {
        res.send("No query param for a name");
    }
    else
        (req.query.name);
    {
        desiredName = data
            .split(' ')
            .find(function (name) { return name == req.query.name; });
    }
    res.send(req.method + " request received at " + req.url + ". Query params are " + queryParamsString + " Name is " + desiredName);
});
// put - if there is a query.name => add name to the data
app.put(BASE_PATH, function (req, res) {
    if (!req.query.name) {
        res.send("No query name parameter");
    }
    else if (data.split(' ').some(function (name) { return name === req.query.name; })) {
        res.send(req.query.name + " is already a part of the data");
    }
    else {
        data += " " + req.query.name;
        res.send(req.query.name + " has been successfully added to data");
        console.log(data);
    }
});
app.listen(PORT, function () {
    console.log("Example app listening at http://localhost:" + PORT);
});
