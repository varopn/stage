const numbers = [1, 2, 3, 4, 5];

numbers.filter = function (callback) {
  if (typeof callback !== 'function') {
    return undefined;
  }

  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;
};

console.log(numbers.filter(number => number > 2));
