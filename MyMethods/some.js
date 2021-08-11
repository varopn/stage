let numbers = [1, 2, 3, 4, 5];

numbers.some = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

console.log(numbers.some(element => element < 2));