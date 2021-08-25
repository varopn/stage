function sumOfMinDigitsInSubArrays(array) {
  let sumOfMin = 0;
  let sumOfMax = 0;

  for (const subArray of array) {
    sumOfMin += Math.min(...subArray);
    sumOfMax += Math.max(...subArray);
  }

  return `Sum of minimum values is [${sumOfMin}], sum of vaximum values is [${sumOfMax}]`;
}

function sumOfMinAndMax(array) {
  let sumOfMin = 0;
  let sumOfMax = 0;

  for (let i = 0; i < array.length; i++) {
    let min = array[i][0];
    let max = array[i][0];

    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > max) {
        max = array[i][j];
      }

      if (array[i][j] < min) {
        min = array[i][j];
      }
    }

    sumOfMin += min;
    sumOfMax += max;
  }

  return `Sum of minimum values is [${sumOfMin}], sum of vaximum values is [${sumOfMax}]`;
}

const testArray = ([
  [1, 5, 2, 6, 16, -1, 0, 12],
  [2, 9, -3, -5, -57, 120, 12],
  [14, -20, -30, 4, 0, 16, 150],
]);

console.log(sumOfMinDigitsInSubArrays(testArray));

console.log(sumOfMinAndMax(testArray));
