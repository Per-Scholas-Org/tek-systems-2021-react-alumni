const { json } = require("express/lib/response");
const fs = require("fs");

// const data = fs.readFileSync("./vodab.json", { encoding: "utf-8" });
// parse - plain string to object
// let arr = JSON.parse(data);
const ob = {
    name: "Jason",
    age: 30,
    description: "I wanna chill",
};

fs.writeFileSync("test.json", JSON.stringify(ob, null, 2));