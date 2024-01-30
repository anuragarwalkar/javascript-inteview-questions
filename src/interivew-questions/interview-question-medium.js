// print all
{"isbn": "123-456-222",  
 "author": 
    {
      "lastname": "Doe",
      "firstname": "Jane"
    },
"editor": 
    {
      "lastname": "Smith",
      "firstname": "Jane"
    }
 }


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Group items on the basis of age of given array of object
let people = [
    { name: 'Harry', age: 21 },
    { name: 'Hermoine', age: 18 },
    { name: 'Ron', age: 21 },
    { name: 'Draco', age: 20 },
];

/**
 * @param {Array} inputArray
 */
function groupBy(inputArray) {

}

// output will be this
const output = {
        21: [{ name: 'Harry', age: 21 },
        { name: 'Ron', age: 21 },],
         20: [{ name: 'Draco', age: 20 },],
          18: [{ name: 'Hermoine', age: 18 }],
    }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Shuffle given array
const someArray = [1, 2, 3, 4, 5, 6, 7, 8];
const shuffle = (array) => {
    // Implement
    return array;
};
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

// Create own JavaScript Promise.all function ---------------------
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 2'), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 3'), 3000));
const promise4 = new Promise((resolve, reject) => setTimeout(() => resolve('Promise 4'), 4000));


async function promiseAll(...promises) {
  
}

promiseAll(promise1, promise2).then(res => {
    console.log(result)
});

// Solution ----------------------------------------------------------
// const results = [];

//   for (let curr of promises) {
//       results.push(await curr);
//   }

//   return results;
// ---------------------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Implement below
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
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function getValueByPath(value, path) {
 // Implement
}

console.log(getValueByPath({ developer: "Software Engineer" }, "developer")); // Software Engineer
console.log(getValueByPath({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName")); // Cruz
console.log(getValueByPath({ developer: { tickets: [{id: 1, name: 'fix main page css'}] } }, "developer.tickets[0].name")); // fix main page css
console.log(getValueByPath([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); // 0
console.log(getValueByPath([{ developer: "Tom" }, [0, null]], "[1][1]")); // null
console.log(getValueByPath([{ developer: "Tom" }, [0, null]], "[1][3]")); // undefined

// Solution -----------------------------------------------------
// path = path.replaceAll(/\[/g, '.').replaceAll(/\]/g, '');    
//  path = path.split('.').filter(Boolean);

//  for(let i = 0; i < path.length; i++) {
//   value = value[path[i]];
//  }

//  return value;
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
