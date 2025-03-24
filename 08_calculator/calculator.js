const add = function (...arg) {
  let sum = arg.reduce((sum, curr) => {
    return (sum += curr);
  });
  return sum;
};

const subtract = function (...arg) {
  let res = arg.reduce((res, curr) => {
    return (res -= curr);
  });
  return res;
};

const sum = function (arr) {
  let sum = arr.reduce((sum, curr) => {
    return (sum += curr);
  }, 0);
  return sum;
};

const multiply = function (arr) {
  let res = arr.reduce((res, curr) => {
    return (res *= curr);
  }, 1);
  return res;
};

const power = function (...arg) {
  let res = arg.reduce((pow, curr) => {
    return Math.pow(pow, curr);
  });
  return res;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
