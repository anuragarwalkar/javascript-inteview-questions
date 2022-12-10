function myReduce(callback, initialValue) {
  let currentValue = initialValue || this[0];

  if (this.length === 0) {
    if (initialValue == null) {
      return new Error("Please provide initial value in case empty array");
    } else {
      return result;
    }
  }

  for (let index = 1; index < this.length; index++) {
    currentValue = callback(currentValue, this[index], index, this);
  }

  return currentValue;
}

Array.prototype.myReduce = myReduce;

const myArray = [];

const result = myArray.myReduce((a, b) => a + b);

console.log("result:", result);
