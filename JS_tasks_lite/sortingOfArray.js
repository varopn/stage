function ascSorting(array) {
  return array.sort(function(a,b){ return a - b});
}

function descSorting(array) {
  return array.sort(function(a,b){ return b - a});
}

let testArray = [12, 4, 6, 89, 46, 100, -8];
console.log(ascSorting(testArray));
console.log(descSorting(testArray));
console.log(bubbleSort(testArray));

function bubbleSort(arr) {
  for(let j=0;j<arr.length;j++) {
      for(let i = 0; i < arr.length; i++) {
          if(arr[i]>arr[i+1]) {
              let temp = arr[i];

              arr[i] = arr[i+1];
              arr[i+1] = temp;
          }
      }
  }

  return arr;
}