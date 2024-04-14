// Implement deep equal function
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function deepEqual(value1, value2) {
    /// Implement
}

const result = deepEqual('anurag', 'anurag');
// Example deepEqual({ parent: { child: { name: 'anurag' } } }, { parent: { child: { name: 'anurag' } } });
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

// Example flaternObj(deeplyNestedMap)
// {
//     "user.key_value_map.CreatedDate": "123424",
//     "user.key_value_map.Department.Name": "XYZ"
// }
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Remove nested duplcated
const allValues = [1, [1, [[9], [2], [3]]]];

const removeNestedDuplicates = (values) => {
    // Implement
}

removeNestedDiplicates(allValues) // [1, 9, 2, 3]
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
// Implement
}

//filter's in-place
deepFilter(obj, (s) => typeof s === "string");

console.log(JSON.stringify(obj, null, 2));
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function highlight(str, keywords) {
  // Implement
}

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['FrontEnd', 'JavaScript'];

console.log(highlight(str, words));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
