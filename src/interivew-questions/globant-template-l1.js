// Write your output EOL 

console.log(1 + 1 + "a" + 1 + 1); 

console.log("A" - "B" + "2");

console.log(1 + -"1" + "2");

// Hoisting
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}

foo()

//
const personInstance = {
  name: 'anurag',
  isAlive: true,
  getCurrentAge: () => {
  	return 28,
  }
}

const parsed = JSON.parse(JSON.stringify(personInstance));


// Clousure and scope
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 0);
}

// Context
var name = 'Anurag';

const person = {
	fullName: 'anurag arwalkar',
  callMe: function () {
    console.log(this.name);
    console.log(this.fullName);
	}
}

person.callMe(); 

// Shallow vs Deep copy:
const clothes = [{ name: "jacket", price: { max: 1200, min: 1100 } }];
const clonedClothes = [...clothes];

clonedClothes[0].name = "hoodie";
clonedClothes[0].price.min = 0;

console.log(clothes[0].name);
console.log(clothes[0].price.min);


// Event loop => Write sequence of the console logs
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
