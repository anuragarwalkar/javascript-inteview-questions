// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Type your code here
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" - 2);
console.log(1 + 1 + "a" + 1 + 1);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var name = 'anurag';

const person = {
	fullName: 'anurag arwalkar',
  callMe: function () {
    console.log(this.name);
    console.log(this.fullName);
	}
}

person.callMe();

// Tell me console.log
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What does the following code print?
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(5 < 6 < 7); //==>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(7 > 5 > 4); //==>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// To what evaluates typeof a and typeof b in the following snippet:
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What is the value of clothes[0]:
const clothes = [{ name: "jacket", price: { max: 1200, min: 1100 } }];
const clonedClothes = clothes;

clonedClothes.length = 0;
console.log(clothes[0]); // => ???

clonedClothes[0].name = "hoodie";
clonedClothes[0].price.min = 0;

console.log(clothes[0].name);
console.log(clothes[0].price.min);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What will output to console the following code:
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 0);
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What prototype inheritance
Object.prototype.name = "Anurag Arwalkar";
const number = 0;
const array = [];

console.log(array.name);
console.log(number.name);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// what is ans of the console log
function a() {
  return "hello";
}
const sentence = a`hi`;
console.log("sentence:", sentence);
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// *********************************************************************
// What’s the result of the equality check?
console.log(0.1 + 0.2 === 0.3); // => why???
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
