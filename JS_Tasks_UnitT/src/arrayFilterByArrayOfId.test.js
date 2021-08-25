describe(`Function 'filteringByArrayOfIds':`, () => {
  const filteringByArrayOfIds = require('./arrayFilterByArrayOfId');
  const testData = require('./testData');

  it(`should be declared`, () => {
    expect(filteringByArrayOfIds).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(filteringByArrayOfIds([])).toBeInstanceOf(Array);
  });

  it(`should return an same of users array if no array of users id's is passed to the function`, () => {
    expect(filteringByArrayOfIds(testData.users)).toEqual(testData.users);
  });

  it(`should return empty array if array of users id's is empty`, () => {
    expect(filteringByArrayOfIds(testData.users,[])).toEqual([]);
  });

  it(`should return array of users by array of users id's testData1`, () => {
    expect(filteringByArrayOfIds(testData.users,testData.arrayOfIds1)).toEqual(testData.resultArray1);
  });

  it(`should return array of users by array of users id's testData2`, () => {
    expect(filteringByArrayOfIds(testData.users,testData.arrayOfIds2)).toEqual(testData.resultArray2);
  });

  it(`should return array of users by array of users id's testData3`, () => {
    expect(filteringByArrayOfIds(testData.users,testData.arrayOfIds3)).toEqual(testData.resultArray3);
  });

  it(`should return array of users by array of users id's testData4`, () => {
    expect(filteringByArrayOfIds(testData.users,testData.arrayOfIds4)).toEqual(testData.resultArray4);
  });

  it(`should return array of users by array of users id's testData5`, () => {
    expect(filteringByArrayOfIds(testData.users,testData.arrayOfIds5)).toEqual(testData.resultArray5);
  });

  it(`should return array of users by array of users id's testData6`, () => {
    expect(filteringByArrayOfIds(testData.users,testData.arrayOfIds6)).toEqual(testData.resultArray6);
  });
});