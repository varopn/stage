const numbers = [1, 2, 3, 4, 5];

numbers.reduce = function (callback, initialValue) {
  if (typeof callback !== 'function') {
    return undefined;
  }

  let accumulator = this[0];
  let i = 1;

  if (initialValue) {
    accumulator = initialValue;
    i = 0;
  }

  for (; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

console.log(numbers.reduce((accumulator, currentValue) => accumulator + currentValue));
