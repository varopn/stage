function sumOfMinDigitsInSubArrays(array) {
   let sumOfMin = 0;
   let sumOfMax = 0;
  
   for (let subArray of array) {
      sumOfMin += Math.min(...subArray);
      sumOfMax += Math.max(...subArray);
   }

   return `Sum of minimum values is [${sumOfMin}], sum of vaximum values is [${sumOfMax}]`;
 }

let testArray = ([
   [1, 5, 2, 6, 16, -1, 0, 12],
   [2, 9, -3, -5, -57, 120, 12],
   [14, -20, -30, 4, 0, 16, 150]
]);

console.log(sumOfMinDigitsInSubArrays(testArray));