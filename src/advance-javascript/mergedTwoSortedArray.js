function mergeSortedArray(array1, array2) {
    const result = [];
    let i = 0;
    let j = 0;
    const total = array1.length + array2.length

    while (total !== result.length) {
        if (array1[i] <= array2[j] || !array2[j]) {
            result.push(array1[i]);
            i++
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    return result
}


const result = mergeSortedArray([3, 9, 10, 18, 23], [5, 12, 15, 20, 21, 25]);

console.log('result:', result);