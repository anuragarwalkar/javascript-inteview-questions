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
const members = [person]; // 2424242
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
