/**
 * @param {string} s
 * @return {number}
 */

function split(splitBy) {
  let temp = "";
  const result = [];
  for (let i = 0; i <= this.length; i++) {
    const char = this[i];

    if (splitBy === "" && char) {
      result.push(char);
      continue;
    }

    if (char === splitBy || this.length === i) {
      if (temp.length > 0) {
        result.push(temp);
      }
      temp = "";
    } else {
      temp += char;
    }
  }

  return result;
}

String.prototype.mySplit = split;

const result = "A/nur/agAr/walkar".mySplit("/");

console.log("result:", result);
