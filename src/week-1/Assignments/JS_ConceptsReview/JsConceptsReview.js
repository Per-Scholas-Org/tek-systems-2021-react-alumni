// 1. Write a very simple key-value store.
let hash = {
    key:null,
    value:null
}
hash.key = "dog";
hash.value = 12;
console.log(hash);

// 2. What is the time-complexity of finding some element e in an array of length n by iterating through every element in the array?
// time-complexity is 'n'

// 3. Is a class an object?
// It's a specialized function, but they're objects, right? They're
// not one of the js data types, so it has to be an object
let r = class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  console.log(typeof r);

// 4. Is a function an object?
function square(number) {return number**2;}
console.log(typeof square);
console.log(typeof square == 'object');

// 5. Is an array an object?
// Yes
let x = new Array();
console.log(typeof x);

// 6. What is a POJO?
// Well, in Java it's a simple object, with data members, getters, and
// setters, so I assume it's the same idea in Javascript and

// 7. In Javascript, what *isn't* an object?
// Hmm.. numbers and booleans? And null and undefined? 
// Yes to those, and also strings, apparently. Their methods
// come from autoboxing string primitives.

// 8. Is Javascript a garbage-collected language?
// Yes.

// 9. Truthiness
//      a. What is the difference between using "==" and "==="? Which
//          is preferred in Javascript and why?
//      === is strict equals. The two values must be equivalent to
//      return true. == equals is "truthy", like 3=="3" is true, etc.
//      b. What does 0 evaluate to in a conditional?
//      false
if (0) console.log(true); else console.log(false);
//      c. What does an empty string evaluate to in a conditional?
//      false
if ('') console.log(true); else console.log(false);
//      d. What does the space character evaluate to in a conditional?
//      true
if (' ') console.log(true); else console.log(false);

// 10. What kinds of primitives are there in JS?
// number, boolean, string, null, undefined

// 11. What is the prototype chain?
// No idea. Each object has a sort of hidden prototype behind it.

// 12. Does Javascript have inheritance the same way JAVA does?
// I know it has inheritance and it's at least similar. Yes, I think
// it's basically the same.

// 13. Does JS have first-class functions?
// Yes, they can be treated as any other type, such as assignment, 
// passed as parameters, etc
//  a. Write a simple callback. What is a scenario where a callback is commonly used?
// Ok, so a callback is a function passed as an argument to another function
// Callbacks usefullness comes in the use of asynchronous functions
console.log("Waiting 3 seconds...");
setTimeout(function() {console.log("Done waiting");}, 3000);
//setInterval(myFunction, milli); // also a cool function. Repeats

// 14. Scope
//  a. How does scope work in JS for a named function versus an arrow function?
//  Arrow functions don't have a this reference
//  b. Within an "if" statement, how does scope work in JS for "var" vs "let" or "const"?
// BWUH??
var foo = "test";
if(true) {
    console.log(foo); // Interviewer: "What does this alert?" Answer: "test"
    var foo = "bar";
}
console.log(foo);
// So, my research seems to say that let and const, added in ES6, do 
// follow traditional block scoping. var, on the other hand, only has
// block scope inside a function. Other than that, the var is hoisted
// no matter where it is declared, and accessible from anywhere

// 15. What is the event loop in JS?
// Yeah, I looked it up but I'm still not following...

// 16. Explain what a closure is. Write a simple closure.
// Nope nope nope.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// Ok, this looks like it's going to be super important

// 17. What is the call stack in JS?
// If it's like Java or other languages, and I assume it is, it's
// the stack upon which method calls are placed as they're executed