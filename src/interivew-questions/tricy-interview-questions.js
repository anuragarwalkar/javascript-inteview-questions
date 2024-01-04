// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Tell the console log
const personObject = {
  name: "Anurag",
  f: function () {
    var self = this;
    console.log(this.name);
    (function () {
      console.log(this.name);
      console.log(self.name);
    })();
  }
}
b.f();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Console.log output
const a = function () {
  console.log('a', this);

  const b = {
    func1: function () {
      console.log('b', this);
    }
  }

  const c = {
    func2: () => {
      console.log('c', this);
    }
  }

  b.func1();
  c.func2();
}

a();


// tell the console log
let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  }
}

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower());
console.log(getPower.apply(hero2));


// Tell the console log
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

foo();

// Objects in javascript
// What's the output of the following code
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

console.log(members);
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
function isInteger(val) { }
// example
isInteger(12); // true
isInteger(16.4); //false
// -----------------------------------------------------

// Tell the console output
var y = 1;
if (function f() { }) {
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

// What is proxy pattern 
// How we can log that object is setting/getting some value
const privateObject = {

};

const proxy = new Proxy(privateObject, {
  set(target, property, value) {
    target[property] = value;
    console.log('setting:', property, value);
    return true;
  },
  get(target, property) {
    console.log('gettong:', property);
    return target[property]
  }
});

// What is the bar value?
var bar = 10 + "20";


// What does the following return?
"I love JavaScript".split("").reverse().join("");

// What does the following return?
"I love JavaScript"
  .split(" ")
  .map(function (el) {
    return el.split("").reverse().join("");
  })
  .join(" ");

// What value does foo take after the following?
window.foo || (window.foo = "bar");

// What happens when you run the following?
var foo = "Hello";
(function () {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// In the following code: What will the lines console.log(foo.length); print?
var foo = [];
foo.push(1);
foo.push(2);
console.log(foo.length); // ??
foo[100] = 0;
console.log(foo.length); // ??

// What is the value of foo.x?
var foo = { n: 1 };
foo.x = foo = { n: 2 };

// What returns null === undefined?

// Given the following input:
function ASD() {
  this.text = "asd";
}
ASD.prototype.test = function (cb) {
  cb();
  console.log(this);
};
ASD.prototype.test2 = function (cb) {
  cb.bind(this)();
  console.log(this);
};

var asd = new ASD();

var testFunction = function () {
  console.log(this);
};

// What does the following return?
asd.test(testFunction);
asd.test2(testFunction);

