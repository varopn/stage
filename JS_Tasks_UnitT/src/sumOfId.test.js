describe(`Function 'sumOfIds':`, () => {
    const sumOfIds = require('./sumOfId');
    const testData = require('./testData');
  
    it(`should be declared`, () => {
      expect(sumOfIds).toBeInstanceOf(Function);
    });
  
    it(`should return an array`, () => {
      expect(typeof sumOfIds([])).toBe('number');
    });

    it(`should return 0 if users array is empty`, () => {
        expect(sumOfIds([])).toBe(0);
    });

    it(`should return correct result by array users testData1`, () => {
        expect(sumOfIds(testData.resultArray1)).toBe(testData.resultSum1);
    });

    it(`should return correct result by array users testData2`, () => {
        expect(sumOfIds(testData.resultArray2)).toBe(testData.resultSum2);
    });

    it(`should return correct result by array users testData3`, () => {
        expect(sumOfIds(testData.resultArray3)).toBe(testData.resultSum3);
    });

    it(`should return correct result by array users testData4`, () => {
        expect(sumOfIds(testData.resultArray4)).toBe(testData.resultSum4);
    });

    it(`should return correct result by array users testData5`, () => {
        expect(sumOfIds(testData.resultArray5)).toBe(testData.resultSum5);
    });

    it(`should return correct result by array users testData6`, () => {
        expect(sumOfIds(testData.resultArray6)).toBe(testData.resultSum6);
    });
});