const convertToCelsius = function(temperatureInCelcius) {
  let temperatureInFarenheit = (temperatureInCelcius - 32) * 5 / 9;
  return Math.round(temperatureInFarenheit*10)/10;
};

const convertToFahrenheit = function(temperatureInFarenheit) {
  let temperatureInCelcius = temperatureInFarenheit * 9 /5 + 32;
  return Math.round(temperatureInCelcius*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
