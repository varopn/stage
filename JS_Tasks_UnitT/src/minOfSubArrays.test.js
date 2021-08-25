describe(`Function 'minOfSubArrays':`, () => {
    const sumOfMinDigitsInSubArrays = require('./minOfSubArrays');
    const testData = require('./testData');
  
    it(`should be declared`, () => {
      expect(sumOfMinDigitsInSubArrays).toBeInstanceOf(Function);
    });
  
    it(`should return an array`, () => {
      expect(sumOfMinDigitsInSubArrays([])).toBeInstanceOf(Array);
    });

    it(`should return an [0, 0] if array is empty`, () => {
        expect(sumOfMinDigitsInSubArrays([])).toEqual([0, 0]);
    });

    it(`should return array of min and max by array testData1`, () => {
        expect(sumOfMinDigitsInSubArrays(testData.minMaxArray1)).toEqual(testData.resultMinMaxArray1);
    });

    it(`should return array of min and max by array testData2`, () => {
        expect(sumOfMinDigitsInSubArrays(testData.minMaxArray2)).toEqual(testData.resultMinMaxArray2);
    });

    it(`should return array of min and max by array testData3`, () => {
        expect(sumOfMinDigitsInSubArrays(testData.minMaxArray3)).toEqual(testData.resultMinMaxArray3);
    });

    it(`should return array of min and max by array testData4`, () => {
        expect(sumOfMinDigitsInSubArrays(testData.minMaxArray4)).toEqual(testData.resultMinMaxArray4);
    });

    it(`should return array of min and max by array testData5`, () => {
        expect(sumOfMinDigitsInSubArrays(testData.minMaxArray5)).toEqual(testData.resultMinMaxArray5);
    });

    it(`should return array of min and max by array testData6`, () => {
        expect(sumOfMinDigitsInSubArrays(testData.minMaxArray6)).toEqual(testData.resultMinMaxArray6);
    });
});