// Serialization/ Deserialization

class MyJSON {
  static parse(inputString) {
    let rootObject = {};

    if (typeof inputString !== "string") {
      return;
    }

    function parseValueByString(value) {
      if (value === "") {
        return value;
      }

      if (value === "true" || value === "false") {
        return value === "true";
      } else if (!isNaN(value) && value.includes(".")) {
        return parseFloat(value);
      } else if (!isNaN(value) && value !== "") {
        return parseInt(value);
      }

      return value;
    }

    function recurssion(currentString, currentValue) {
      const strItems = currentString.slice(1, -1).split(",");

      if (Array.isArray(currentValue)) {
        // for (let value of strItems) {
        //   currentValue.push(recurssion(value, currentValue));
        // }
      } else {
        for (let keyValuePair of strItems) {
          const [key, value] = keyValuePair
            .split(/:(.*)/)
            .map((v) => v.replace(/["']/g, ""));

          if (value.startsWith("{")) {
            currentValue[key] = recurssion(value, {});
          } else if (value.startsWith("[")) {
            currentValue[key] = recurssion(value, []);
          } else {
            currentValue[key] = parseValueByString(value);
          }
        }
      }

      return currentValue;
    }

    recurssion(inputString, rootObject);

    return rootObject;
  }

  static stringify(inputObject) {
    let result = ``;

    function getValue(value) {
      switch (typeof value) {
        case "string": {
          return `"${value}"`;
        }
        case "number": {
          return value;
        }
        case "boolean": {
          return value.toString();
        }
      }
    }

    function recurssion(object) {
      if (!object) {
        return;
      }
      const isArray = Array.isArray(object);
      result += isArray ? "[" : "{";
      let firstKey = true;

      for (let key in object) {
        if (typeof object[key] === "object" && isArray) {
          recurssion(object[key]);
        } else if (typeof object[key] === "object") {
          result += `${firstKey ? "" : ","}"${key}":`;
          recurssion(object[key]);
        } else if (isArray) {
          result += `${firstKey ? "" : ","}"${object[key]}"`;
        } else {
          result += `${firstKey ? "" : ","}"${key}":${getValue(object[key])}`;
        }
        firstKey = false;
      }
      result += isArray ? "]" : "}";
    }

    recurssion(inputObject);
    return result;
  }
}

const bigNestedObject = {
  // id: 1,
  name: "Big Nested Object",
  // details: {
  //   description: "This is a deeply nested object for demonstration.",
  // },
  items: [1, 2, 3],
};

console.log(MyJSON.stringify(bigNestedObject));
console.log("-----------");
// console.log("OEM", JSON.parse(JSON.stringify(bigNestedObject)));
console.log("-----------");
// console.log("OES", MyJSON.parse(MyJSON.stringify(bigNestedObject)));
console.log("-----------");
// {"id":1,"name":"Big Nested Object","metadata":{"createdBy":"Admin","createdAt":"2024-05-06","version":1}}
