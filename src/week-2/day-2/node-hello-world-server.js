"use strict";
exports.__esModule = true;
var http_1 = require("http");
/***
 * HOW TO RUN THIS CODE
 *
 * 1. Go to your project root directory (the same place where the package.json and tsconfig.json files are located
 *
 * 2. Run npm install -- this will check package.json for new dependencies (which there are - typescript is now a dev dependency) and install them
 *
 * 3. Run tsconfig --watch src/week-2/day-2/node-hello-world-server.ts
 *    This tells the Typescript compiler to watch this file and recompile it every time a file changes.
 *    IMPORTANT: Right now the compiled code is still in the src/ dir - we'll fix that later.
 *
 * 4. In another terminal (also in project root directory), run:
 *    nodemon src/week-2/day-2/node-hello-world-server.js -q
 *
 * 5. In your browser go to http://localhost:9999 - you can also go to http://localhost:8888 as we have started two different servers!
 * You should see a message in each : )
 */
/**
 * Server one
 */
var port = 9999;
var getDatabaseInfo = function (request, response) {
    // PRETEND we got first name
    var username = request.url.toString();
    // PRETEND we got password
    var password = request.url.toString();
    /// Check if password correct. PASSWORD IS WRONG
    response.write('<h1>BAD PASSWORD</h1>');
    response.end();
};
var doThisWhenServerGetsARequest = function (request, response) {
    console.log('incoming http request!!  ');
    console.log(request.url);
    console.log(request.method);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Log in </h1>');
    getDatabaseInfo(request, response);
};
var server = http_1.createServer(doThisWhenServerGetsARequest);
server.listen(port, function () {
    console.log("Server running at port " + port);
});
/**
 * Server two
 */
var port2 = 8888;
var otherServer = http_1.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>This is port " + port2 + " </h1>");
});
otherServer.listen(port2, function () {
    console.log("Server running at port " + port2);
});
