// const stat = require("./stat");

// console.log(stat.pi);
// console.log(stat.mean([1, 2, 3, 4, 5]));

// how to use core module.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name???", (answer) => {
    console.log(`Hello, ${answer}`);
    rl.close();
});