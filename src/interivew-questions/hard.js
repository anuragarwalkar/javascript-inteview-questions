// Implement deep equal function
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function deepEqual(value1, value2) {

}

const result = deepEqual('anurag', 'anurag');
// const result = deepEqual({ parent: { child: { name: 'anurag' } } }, { parent: { child: { name: 'anurag' } } });
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Implement below
let deeplyNestedMap = {
    user: {
        key_value_map: {
            CreatedDate: "123424",
            Department: {
                Name: "XYZ",
            },
        },
    },
};

const flaternObj = (obj) => {
    // Implement
};

console.log(flaternObj(deeplyNestedMap));
// {
//     "user.key_value_map.CreatedDate": "123424",
//     "user.key_value_map.Department.Name": "XYZ"
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Remove nested duplcated
const allValues = [1, [1, [[9], [2], [3]]]];

const removeNestedDuplicates = (values) => {
    
}

removeNestedDiplicates(allValues) // [1, 9, 2, 3]

// Solution -----------------------------------------------------------
// if (!Array.isArray(values)) {
//         return values;
//     }

//     const resultArray = []

//     for (const item of values) {
//         const value = removeNestedDuplicates(item);

//         if (Array.isArray(value)) {
//             for (const inner of value) {
//                 if (!resultArray.includes(inner)) {
//                     resultArray.push(inner);
//                 }
//             }
//         } else if (item && !resultArray.includes(value)) {
//             resultArray.push(value);
//         }
//     }

//     return resultArray;
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    f: false,
    e: {
     f: {
       g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

function deepFilter(object, filterCallback) {
// mutate original object

}

//filter's in-place
deepFilter(obj, (s) => typeof s === "string");

console.log(JSON.stringify(obj, null, 2));

// Solution -------------------------------------------------------------------
// if(typeof object === 'object') {
//     for(let key in object) {
//         if(!filterCallback(object[key]) && typeof object[key] !== 'object') {
//             delete object[key];
//         }else {
//             deepFilter(object[key], filterCallback)
//         }

//         if(typeof object[key] === 'object' && Object.keys(object[key]).length === 0) {
//            delete object[key];
//        }
//     }
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function highlight(str, keywords) {
  let result = "";

  const keywordsCache = new Set(keywords);

  for(let word of str.split(' ')) {
    if(keywordsCache.has(word)) {
        result += `<strong>${word}</strong>`;
    }else {
      let pattern = null;

        for(let i = 0; i < word.length; i++) {
         for(let j = i+1; j <= word.length; j++) {
          if(keywordsCache.has(word.slice(i, j))) {
            pattern = [i, j];
          }
         }
        }

        if(pattern) {
          const [start, end] = pattern;
          result += `${word.slice(0, start)}<strong>${word.slice(start, end)}</strong>${word.slice(end)}`;
        }else {
          result += ` ${word} `;
        }
    }
  }

  return result;
}

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['FrontEnd', 'JavaScript'];

console.log(highlight(str, words));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
