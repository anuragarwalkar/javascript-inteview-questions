// Tell the console log
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}

// Tell sequence of the console logs
const callMe = () => new Promise((resolve) => resolve("Hi from promise! 👋"));

const funcA = () => {
  // Calling setTimeout
  setTimeout(() => console.log("Hello from setTimeout ⏳"), 0);

  // Consuming Promise
  callMe().then((res) => console.log(res));

  console.log("Inside funcA 👽");
};

const funcB = async () => {
  console.log(await callMe());
  console.log("Inside funcB 🔥");
};

funcA();
funcB();

// Objects in javascript
// Question 3 - What's the output of the following code
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// -----------------------------------------------------

// What's the output
let person = { name: "Anurag" };
const members = [person];
person = null;

console.log(members); //
// -----------------------------------------------------

// What's the output
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
// -----------------------------------------------------

// Write solution
function isInteger(val) {}
// example
isInteger(12); // true
isInteger(16.4); //false
// -----------------------------------------------------

// Tell me console.log
var a = {
  name: "Globant",
};
var b = 2;
var c = [];

function change(tempA, tempB, tempC) {
  tempA.name = "Pune";
  tempB = 3;
  tempC.push("c");
}

change(a, b, c);

console.log(a.name, b, c);
// ----------------------------------------

// Tell the console output
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
// -----------------------------------------

// Tell below output
(function () {
  var a = (b = 5);
})();

console.log(b);
// -----------------------------------------
