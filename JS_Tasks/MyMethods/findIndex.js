const numbers = [1, 2, 3, 4, 5];

numbers.findIndex = function (callback) {
  if (typeof callback !== 'function') {
    return undefined;
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

console.log(numbers.findIndex(element => element < 0));
