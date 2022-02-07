const exp = "[()]{}{[()()]()}";
// const exp = "{[][]}";

function checkIsOpening(bracket) {
  return ["{", "[", "("].includes(bracket);
}

function checkIsClosing(bracket) {
  return ["}", "]", ")"].includes(bracket);
}

function getOpeningBracket(closingBracket) {
  const openingBracket = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  return openingBracket[closingBracket];
}

function checkValidBrackets(input) {
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (checkIsOpening(input[i])) {
      stack.push(input[i]);
    } else if (checkIsClosing(input[i])) {
      const stackVal = stack.pop();
      const openingBracket = getOpeningBracket(input[i]);
      if (openingBracket !== stackVal) {
        return false;
      }
    }
  }

  return true;
}

const result = checkValidBrackets(exp);

console.log("result:", result);
