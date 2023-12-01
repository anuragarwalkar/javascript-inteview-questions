// Map Vs ForEach
const arr = [2, 5, 3, 4, 7];

// null vs undefined
console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(undefined === null);

// Explain event delegation
// https://codesandbox.io/s/event-delegation-demo-ydylhw

// Flattern the array
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8]],
  [10, 11, 12],
];

// diff var vs let vs const

// What will be the setTimeout output
function run() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

run();
