const fs = require("fs");

// fs.writeFileSync("./hello.txt", "Hi guys");
// const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
// console.log(data);
// fs.appendFileSync("./hello.txt", "\nWelcome!");
// const list = fs.readdirSync(".");
// console.log(list);

// Synchronous vs asynchronous
// block    vs      non-block
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
// console.log(data);

let text = "default";
fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
    console.log(data);
    text = data;
});
console.log(text);

setTimeout(() => {
    console.log("print after 5 secs");
}, 5000);