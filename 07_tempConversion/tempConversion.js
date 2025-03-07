const convertToCelsius = function (n) {
  celsius = ((n - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (n) {
  fahr = (n * 9) / 5 + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
