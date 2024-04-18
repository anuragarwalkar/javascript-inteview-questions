const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

function filterObject(arrayOfObj, filterBy) {
 return arrayOfObj.filter((item, index) => {
  if(typeof filterBy === 'number' && index === filterBy) {
    return true;  
  }

  for (let value of Object.values(item)) {
    if(value === filterBy) {
      return true;
    }
  }

  return false; 
 });
}

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }
