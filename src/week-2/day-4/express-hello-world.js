var EXPRESS = require('express');
var APP = EXPRESS();
var PORT = 3000;
APP.get("/", function (req, res) {
    res.write("<a href=\"names\">names</a>");
});
APP.get('/names', function (req, res) {
    var FS = require('fs');
    FS.readFile('./names.txt', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var queryParams = JSON.stringify(req.query);
        console.log(queryParams);
        console.log(req.query.name);
        if (req.query.name) {
            var desiredName = data
                .split('\n')
                .find(function (name) { return name == req.query.name; });
            if (desiredName)
                console.log(desiredName);
            else
                console.log('Name not found!');
        }
        //    console.log(data);
        res.write("HTTP " + req.method + " request received at " + req.url + "\n\n");
        res.write("Query params are " + queryParams + "\n\n");
        res.write("<h1>Data:</h1><br>");
        res.write("<p>" + data + "</p>");
        res.end();
        //    res.send(`<h1>Data:</h1><br><p>${data}</p>`);
    });
});
// If there is a query param "name," add the name to the end of the file"
APP.put('/names', function (req, res) {
    var FS = require('fs');
    FS.readFile('./names.txt', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        var queryParams = JSON.stringify(req.query);
        console.log(queryParams);
        console.log(req.query.name);
        if (req.query.name) {
            data += "\n" + req.query.name;
            console.log(data);
            //      fs.
        }
    });
});
APP.get('/index', function (req, res) {
    res.send("<h1>We're on the index page!");
});
APP.listen(PORT, function () {
    console.log("Example app listening at http://localhost:" + PORT);
});
