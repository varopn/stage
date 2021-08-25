describe(`Function 'searchingTripleA':`, () => {
    const searchingTripleA = require('./searchingTripleA');
    const testData = require('./testData');
  
    it(`should be declared`, () => {
      expect(searchingTripleA).toBeInstanceOf(Function);
    });
  
    it(`should return a string`, () => {
      expect(typeof searchingTripleA("aaab")).toBe("string");
    });

    it(`should return an empty string if empty string is passed to function`, () => {
        expect(searchingTripleA("")).toBe("");
    });

    it(`should return correct result string by string testData1`, () => {
        expect(searchingTripleA(testData.str1)).toEqual(testData.resultstr1);
    });

    it(`should return correct result string by string testData2`, () => {
        expect(searchingTripleA(testData.str2)).toEqual(testData.resultStr2);
    });

    it(`should return correct result string by string testData3`, () => {
        expect(searchingTripleA(testData.str3)).toEqual(testData.resultStr3);
    });

    it(`should return correct result string by string testData4`, () => {
        expect(searchingTripleA(testData.str4)).toEqual(testData.resultStr4);
    });

    it(`should return correct result string by string testData5`, () => {
        expect(searchingTripleA(testData.str5)).toEqual(testData.resultStr5);
    });

    it(`should return correct result string by string testData6`, () => {
        expect(searchingTripleA(testData.str6)).toEqual(testData.resultStr6);
    });
});