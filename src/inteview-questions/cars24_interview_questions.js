// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is Temporal Dead Zone
function callMe() {
  console.log(a, b, c);
  var a = "Anurag";
  let b = "BMW";
  const c = "CURL";
}

callMe();
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is implicit and explicit binding
const obj = {
  name: "Anurag",
  display: function () {
    console.log(this.name);
  },
};

const obj1 = {
  name: "Steve",
};

obj.display.call(obj1);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write your own memoization function
function memo() { }

function heavyJob(num1, num2) {
  for (let i = 0; i <= 1000000000; i++) { }
  return num1 * num2;
}

const memoHeavyJob = memo(heavyJob);

console.log("First Try:", memoHeavyJob(5, 5));

console.log("Second Try:", memoHeavyJob(5, 5));
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
Promise.resolve(() => console.log("C")).then((res) => res());
console.log("D");
// Follow this link for the details https://bit.ly/3Jp6SAH
// https://www.jsv9000.app
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Infinite currying
function add() { }

console.log(add(5)(2)(5)());
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Implement this code
const result = calc.add(5).subtract(2).multiply(5);
console.log("result:", result);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Implement this code In React
// https://htp7y0.csb.app/
// https://codesandbox.io/s/nested-files-and-folder-htp7y0
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Composition Polyfill
function addFive(a) {
  return a + 5;
}

function substractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

function compose(...functions) {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  }
}

const eval = compose(addFive, substractTwo, multiplyFour);

console.log('eval:', eval(100), 100 * 4 - 2 + 5);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


