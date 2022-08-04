var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
// <

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

const multiply = (x = value) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
// -----------------------------------------------------
