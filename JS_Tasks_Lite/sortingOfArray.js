function descBubbleSorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }

  return array;
}

function ascBubbleSorting(array) {
  return descBubbleSorting(array).reverse();
}

function ascSorting(array) {
  return array.sort(function(a,b){ return a - b});
}

function descSorting(array) {
  return array.sort(function(a,b){ return b - a});
}

let testArray = [12, 4, 6, 89, 46, 100, -8];
console.log(ascSorting(testArray));
console.log(descSorting(testArray));
console.log(descBubbleSorting(testArray));
console.log(ascBubbleSorting(testArray));