function ascSorting(array) {
  return array.sort(function(a,b){ return a - b});
}

function descSorting(array) {
  return array.sort(function(a,b){ return b - a});
}

let testArray = [12, 4, 6, 89, 46, 100, -8];
console.log(ascSorting(testArray));
console.log(descSorting(testArray));
