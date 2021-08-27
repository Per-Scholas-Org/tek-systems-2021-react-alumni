// Example of all valid JSON types
// See https://json-schema.org/understanding-json-schema/reference/type.html
const myObject = {
    a: "this is property a",
    mySecondObjectProperty: "second object property",
    "x" : "the x key of my object",
    "2": "the key that is number 2",
    3: "key that is 3"
}

console.log("My object: ", myObject);

const myInfo = {
    name: "Mike",
    birthday: 08121981,
    citiesLivedIn: ["Doylestown, Atco"],
    isHuman: true,
    planetsVisited : null,
    personalInfo: {"favoriteFood":"hamburger","age":40}
}

console.log("\nother object", myInfo);

console.log("\nMy info stringified:", JSON.stringify(myInfo));

function sayHi(name) {
    return `\nMy name is ${name}`;
}

console.log(sayHi("Mike"));