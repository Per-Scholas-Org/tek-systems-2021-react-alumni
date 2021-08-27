"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
console.log('hi');
var app = express_1["default"]();
var PORT = 9999;
// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.
app.get('/names', function (req, res) {
    fs_1["default"].readFile('names.txt', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var queryParamsString = JSON.stringify(req.query);
        console.log(queryParamsString);
        var desiredName = "";
        if (!req.query.name) {
            res.send('No query param for a name');
        }
        else {
            console.log('name query param is ', req.query.name);
            var dataAsArray = data.split('\n');
            // TODO: Get req.query.name from datasArray  and return it in res.send()
            var desirdName = "";
            res.send("Found name: " + desiredName);
        }
    });
});
app.post('/names', function (req, res) {
    res.send("HTTP " + req.method + " request received at " + req.url);
});
// IMPORTANT: YOU WILL NEED TO USE POSTMAN TO TEST THIS 
// If there is a query param "name", add the name to the end of the file
app.put('/names', function (req, res) {
    res.send("HTTP " + req.method + " request at " + req.url);
});
app["delete"]('/names', function (req, res) {
    res.send("HTTP " + req.method + " request received at " + req.url);
});
app.listen(PORT, function () {
    console.log("app listening at http://localhost:" + PORT);
});
