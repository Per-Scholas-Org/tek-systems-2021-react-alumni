// const res = require("express/lib/response");
// const http = require("http");
// const server = http.createServer((req, res) => {
//     // console.log(req);
//     // console.log(req.url);
//     if (req.url === "/") {
//         res.write("<h1>Hello from node.js</h1>");
//     } else {
//         res.write(`invalid url - ${req.url}`);
//     }
//     res.end();
// });

// server.listen(3000, () => {
//     console.log("The server is listening on port 3000");
// });

const express = require("express");
// const req = require("express/lib/request");
// const res = require("express/lib/response");
const server = express();
const expressHandlebars = require("express-handlebars");

server.engine(
    "hbs",
    expressHandlebars({
        extname: "hbs",
        defaultLayout: "layout.hbs",
        partialsDir: "partials",
    })
);
server.set("view engine", "hbs");

server.use((req, res, next) => {
    console.log("What's gucci");
    req.user = {
        id: "1234",
    };
    next();
});

server.use(express.static(__dirname + "/public"));
server.get("/", (req, res) => {
    res.render("home");
});

server.get("/", (req, res) => {
    // res.send("<h1>Hello from node.js</h1>");
    // __dirname  - current path
    // __filename  - file name
    console.log(req.user);
    res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
    // res.send("<h1>Hello from node.js</h1>");
    // __dirname  - current path
    // __filename  - file name
    res.sendFile(__dirname + "/about.html");
});

server.use((req, res) => {
    res.sendFile(__dirname + "/404.html");
});

// GET          www.facebook.com/
// POST         ID: abc pass: 1234. usually checking valid or not
// DELETE       ex. delete user acc
// PUT          mainly updating purpose
server.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("server is listening on port 3000");
});