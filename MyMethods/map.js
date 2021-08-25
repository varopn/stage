const numbers = [1, 2, 3, 4, 5];

numbers.map = function (callback) {
  if (typeof callback !== 'function') {
    return undefined;
  }

  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    resultArray.push(callback(this[i]));
  }

  return resultArray;
};

console.log(numbers.map(number => number * 2));
