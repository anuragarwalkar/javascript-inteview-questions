// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Highlight the words in the string
function highlight(str, words) {}
highlight("Ultimate JavaScript / FrontEnd Guide", [
  "Front",
  "End",
  "JavaScript",
]);
// "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Lexical scope vs dynamic scope
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  var a = 2;
  foo();
}

bar();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const json = {
  type: "div",
  props: { id: "hello", class: "foo" },
  children: [
    { type: "h1", children: "HELLO" },
    {
      type: "p",
      children: [{ type: "span", props: { class: "bar" }, children: "World" }],
    },
  ],
};

function JSONtoHTML(htmlMeta) {
  // Implement
}

// Output: <div id="hello" class="foo">
//   <h1>HELLO</h1>
//   <p>
//     <span class="bar">World</span>
//   </p>
// </div>;
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Print all values from this object ("123-456-222", "Doe", "Jane")
const exampleData = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    lastname: "Smith",
    firstname: "Jane",
  },
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Shuffle given array
const someArray = [1, 2, 3, 4, 5, 6, 7, 8];
const shuffle = (array) => {
  // Implement
  return array;
};
// Result: [3, 1, 6, 7, 8, 2, 4, 5]
// Result: [7, 6, 1, 4, 3, 8, 5, 2]
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a function called sum ... if you pass the arguments like this then
// it should give the total sum
const sum = () => {
  // Implement
};
console.log(sum(1)(2)(3)());
// console.log(sum(1)(2)(3)....());
// Output 6
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Navigate till path
const exampleObj = {
  a: {
    b: {
      c: "JavaScript is fun 😎",
    },
  },
};

const navigateToGivenPath = (obj, path) => {
  // Implement
};

// Output navigateToGivenPath(exampleObj, "a.b.c") => JavaScript is fun 😎
// Output navigateToGivenPath(exampleObj, "a.b.c.d") => null

// set value by path
const setValueByPath = (obj, path, value) => {
  // Implement
};
// Output setValueByPath(exampleObj, "a.b.data[0]", 'Anurag') => null
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function getValueByPath(value, path) {
  // Implement
}

console.log(getValueByPath({ developer: "Software Engineer" }, "developer")); // Software Engineer
console.log(
  getValueByPath(
    { developer: { firstName: "Tom", lastName: "Cruz" } },
    "developer.lastName"
  )
); // Cruz
console.log(
  getValueByPath(
    { developer: { tickets: [{ id: 1, name: "fix main page css" }] } },
    "developer.tickets[0].name"
  )
); // fix main page css
console.log(
  getValueByPath([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")
); // 0
console.log(getValueByPath([{ developer: "Tom" }, [0, null]], "[1][1]")); // null
console.log(getValueByPath([{ developer: "Tom" }, [0, null]], "[1][3]")); // undefined

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
