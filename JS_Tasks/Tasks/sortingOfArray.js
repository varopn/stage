function ascSorting(array) {
  return array.sort((a, b) => a - b);
}

function descSorting(array) {
  return array.sort((a, b) => b - a);
}

const testArray = [12, 4, 6, 89, 46, 100, -8];
console.log(ascSorting(testArray));
console.log(descSorting(testArray));
