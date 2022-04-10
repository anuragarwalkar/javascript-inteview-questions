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
function memo() {}

function heavyJob(num1, num2) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num1 * num2;
}

const memoHeavyJob = memo(heavyJob);

console.log("First Try:", memoHeavyJob(5, 5));

console.log("Second Try:", memoHeavyJob(5, 5));
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
