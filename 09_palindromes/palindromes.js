const palindromes = function (text) {
  textArray = text.split("").filter((item) => {
    return /[a-z0-9]/i.test(item);
  });

  return (
    textArray.toString().toUpperCase() ===
    textArray.reverse().toString().toUpperCase()
  );
};

// Do not edit below this line
module.exports = palindromes;
