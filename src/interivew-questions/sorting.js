const unsortedArray = [1, 2, 5, 6, 8, 10, 3];

const bubbleSort = (inputArray, asc = true) => {
  while (true) {
    let swap = false;

    for (let i = 0; i < inputArray.length; i++) {
      if (
        (inputArray[i] > inputArray[i + 1] && asc) ||
        (inputArray[i] < inputArray[i + 1] && !asc)
      ) {
        let temp = inputArray[i + 1];
        inputArray[i + 1] = inputArray[i];
        inputArray[i] = temp;
        swap = true;
      }
    }

    if (!swap) {
      break;
    }
  }

  return inputArray;
};
// 10, 8, 5, 1
const selectionSort = (inputArray, asc = true) => {
  for (let i = 0; i < inputArray.length; i++) {
    let smallLargeIndex = i;
    for (let j = i; j < inputArray.length; j++) {
      if (
        (inputArray[j] < inputArray[smallLargeIndex] && asc) ||
        (inputArray[j] > inputArray[smallLargeIndex] && !asc)
      ) {
        smallLargeIndex = j;
      }
    }

    if (smallLargeIndex !== i) {
      const temp = inputArray[i];
      inputArray[i] = inputArray[smallLargeIndex];
      inputArray[smallLargeIndex] = temp;
    }
  }

  return inputArray;
};
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}
const mergeSort = (unsortedArray) => {
  if (unsortedArray.length === 1) {
    return unsortedArray;
  }

  const mid = Math.floor(unsortedArray.length / 2);
  const left = mergeSort(unsortedArray.slice(0, mid));
  const right = mergeSort(unsortedArray.slice(mid));

  return merge(left, right);
};

console.log(bubbleSort(unsortedArray, false));
console.log(selectionSort(unsortedArray));
console.log(mergeSort(unsortedArray));
