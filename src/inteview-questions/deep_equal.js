function deepEqual(value1, value2) {
    if (typeof value1 !== 'object' && typeof value2 !== 'object') {
        return value1 === value2;
    }

    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value1.length) {
            return false;
        }

        for (let i = 0; i < value1.length; i++) {
            return deepEqual(value1[i], value2[i]);
        }

    }

    const valueOneKeys = Object.keys(value1);
    const valueTwoKeys = Object.keys(value2);
    let allKeysValid = true;

    if (valueOneKeys.length === valueTwoKeys.length) {
        for (let i = 0; i < valueOneKeys.length; i++) {
            const val = deepEqual(valueOneKeys, valueOneKeys);
            !val && (allKeysValid = val)
        }

        if (!allKeysValid) {
            return false;
        }

        for (let i = 0; i < valueOneKeys.length; i++) {
            return deepEqual(value1[valueOneKeys[i]], value2[valueOneKeys[i]]);
        }
    } else {
        return false;

    }

    return true;
}


const result = deepEqual({ parent: { child: { name: 'anurag' } } }, { parent: { child: { name: 'anurag' } } });

console.log('result:', result);