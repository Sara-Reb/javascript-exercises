const sumAll = function (x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
    return "ERROR";
  }
  if (x < y) {
    minVal = x;
    maxVal = y;
  } else {
    minVal = y;
    maxVal = x;
  }
  sum = 0;
  i = minVal;
  while (i <= maxVal) {
    sum += i;
    i++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
