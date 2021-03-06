const numbers = [1, 2, 3, 4, 5];

numbers.every = function (callback) {
  if (typeof callback !== 'function') {
    return undefined;
  }

  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

console.log(numbers.every((element) => element < 100));
