function sumOfMinDigitsInSubArrays(array) {
  let sumOfMin = 0;
  let sumOfMax = 0;
  // eslint-disable-next-line
  for (const subArray of array) {
    sumOfMin += Math.min(...subArray);
    sumOfMax += Math.max(...subArray);
  }

  return [sumOfMin, sumOfMax];
}

module.exports = sumOfMinDigitsInSubArrays;
