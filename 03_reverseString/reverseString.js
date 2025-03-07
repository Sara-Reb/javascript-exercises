const reverseString = function (string) {
  let reversedString = [];
  len = string.length;
  for (let i = 0; i < len; i++) {
    reversedString[i] = string[len - 1 - i];
  }
  return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
