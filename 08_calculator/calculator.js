const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((acc, cur) => acc + cur, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  let fac = 1;
	for (i=1; i<=a; i++) {
    fac = fac * i
  };
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
