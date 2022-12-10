function myMap(callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index));
  }

  return result;
}

Array.prototype.myMap = myMap;

console.log([1, 2, 3].myMap((i) => i * 10));
