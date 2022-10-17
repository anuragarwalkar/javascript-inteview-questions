function deepEqual(value1, value2) {
    if (typeof value1 !== 'object' && typeof value2 !== 'object') {
        return value1 === value2;
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value1.length) {
            return false;
        }

        for (let i = 0; i < value1.length; i++) {
            deepEqual(value1[i], value2[i]);
        }

    }


    return true;
}


const result = deepEqual([], []);

console.log('result:', result);