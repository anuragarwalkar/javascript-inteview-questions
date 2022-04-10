// What is the bar value?
var bar = 10 + "20";

// How would you go about creating an add function that does the following?
add(2, 5); // return: 7
add(2)(5); // return: 7

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

// What does the following code print?
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");

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
