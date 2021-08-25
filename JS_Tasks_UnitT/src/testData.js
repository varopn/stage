const arrayOfIds1 = [1, 4, 7, 10, 12, 13];
const arrayOfIds2 = [0, 1];
const arrayOfIds3 = [0, 1, 4];
const arrayOfIds4 = [0, 1, 4, 7];
const arrayOfIds5 = [0, 1, 4, 7, 10];
const arrayOfIds6 = [0, 10];
const users = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  id: 1,
  name: 'Kale',
  email: 'kale@gmail.com',
  phoneNumber: '24352345',
}, {
  id: 4,
  name: 'John',
  email: 'johnasd232@gmail.com',
  phoneNumber: '32473747234',
}, {
  id: 7,
  name: 'John',
  email: 'johnasd232@gmail.com',
  phoneNumber: '47348t28943',
}, {
  id: 10,
  name: 'John',
  email: 'johnasd232@gmail.com',
  phoneNumber: '47348t28943',
}];
const resultArray1 = [{
  email: 'kale@gmail.com',
  id: 1,
  name: 'Kale',
  phoneNumber: '24352345',
}, {
  email: 'johnasd232@gmail.com',
  id: 4,
  name: 'John',
  phoneNumber: '32473747234',
}, {
  email: 'johnasd232@gmail.com',
  id: 7,
  name: 'John',
  phoneNumber: '47348t28943',
}, {
  email: 'johnasd232@gmail.com',
  id: 10,
  name: 'John',
  phoneNumber: '47348t28943',
}];
const resultArray2 = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  email: 'kale@gmail.com',
  id: 1,
  name: 'Kale',
  phoneNumber: '24352345',
}];
const resultArray3 = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  email: 'kale@gmail.com',
  id: 1,
  name: 'Kale',
  phoneNumber: '24352345',
}, {
  email: 'johnasd232@gmail.com',
  id: 4,
  name: 'John',
  phoneNumber: '32473747234',
}];
const resultArray4 = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  email: 'kale@gmail.com',
  id: 1,
  name: 'Kale',
  phoneNumber: '24352345',
}, {
  email: 'johnasd232@gmail.com',
  id: 4,
  name: 'John',
  phoneNumber: '32473747234',
}, {
  email: 'johnasd232@gmail.com',
  id: 7,
  name: 'John',
  phoneNumber: '47348t28943',
}];
const resultArray5 = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  email: 'kale@gmail.com',
  id: 1,
  name: 'Kale',
  phoneNumber: '24352345',
}, {
  email: 'johnasd232@gmail.com',
  id: 4,
  name: 'John',
  phoneNumber: '32473747234',
}, {
  email: 'johnasd232@gmail.com',
  id: 7,
  name: 'John',
  phoneNumber: '47348t28943',
}, {
  email: 'johnasd232@gmail.com',
  id: 10,
  name: 'John',
  phoneNumber: '47348t28943',
}];
const resultArray6 = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  id: 10,
  email: 'johnasd232@gmail.com',
  name: 'John',
  phoneNumber: '47348t28943',
}];
const minMaxArray1 = [
  [1, 5, 2, 6, 16, -1, 0, 12],
  [2, 9, -3, -5, -57, 120, 12],
  [14, -20, -30, 4, 0, 16, 150],
];
const minMaxArray2 = [
  [1, 5, 2, 6, 16, -13, 0, 12],
  [2, 9, -3, -5, -5, 120, 12],
  [14, -20, -2, 4, 0, 16, 150],
];
const minMaxArray3 = [
  [1, 5, 2, 6, 16, -1, 0, 12],
  [2, 9, -3, -3, -1, 120, 12],
  [14, -20, -3, 4, 0, 16, 150],
];
const minMaxArray4 = [
  [1, 5, 2, 6, 16, -1, 0, 12],
  [2, 9, -3, -5, -57, 3, 12],
  [14, -1, -1, 4, 0, 16, 1],
];
const minMaxArray5 = [
  [1, 5, 2, 6, 16, -1, 0, 12],
  [2, 9, -3, -5, -57, 120, 12],
  [14, -20, -30, 4, 0, 16, 1],
];
const minMaxArray6 = [
  [1, 5, 2, 6, 1, -1, 0, 1],
  [2, 9, -3, -5, -57, 120, 12],
  [14, -20, -1, 4, 0, 16, 1],
];
const resultMinMaxArray1 = [-88, 286];
const resultMinMaxArray2 = [-38, 286];
const resultMinMaxArray3 = [-24, 286];
const resultMinMaxArray4 = [-59, 44];
const resultMinMaxArray5 = [-88, 152];
const resultMinMaxArray6 = [-78, 142];
const str1 = 'aa aba abba abbba abbbba abbbbba aaab aab ab a abbba aaaab';
const str2 = 'aa aba abba abbba wee abbbbbbbbbbba aab aaaab';
const str3 = 'aa aba qwerqw q qe eed aaab';
const str4 = 'aa fferf ab ab ab abbba aaaab';
const str5 = 'aaab';
const str6 = 'aaab aaab aaab aaab aaab aaab';
const resultstr1 = 'aa aba abba abbba abbbba abbbbba !b aab ab a abbba a!b';
const resultStr2 = 'aa aba abba abbba wee abbbbbbbbbbba aab a!b';
const resultStr3 = 'aa aba qwerqw q qe eed !b';
const resultStr4 = 'aa fferf ab ab ab abbba a!b';
const resultStr5 = '!b';
const resultStr6 = '!b !b !b !b !b !b';
const resultSum1 = 22;
const resultSum2 = 1;
const resultSum3 = 5;
const resultSum4 = 12;
const resultSum5 = 22;
const resultSum6 = 10;

module.exports = {
  arrayOfIds1,
  arrayOfIds2,
  arrayOfIds3,
  arrayOfIds4,
  arrayOfIds5,
  arrayOfIds6,
  users,
  resultArray1,
  resultArray2,
  resultArray3,
  resultArray4,
  resultArray5,
  resultArray6,
  minMaxArray1,
  minMaxArray2,
  minMaxArray3,
  minMaxArray4,
  minMaxArray5,
  minMaxArray6,
  resultMinMaxArray1,
  resultMinMaxArray2,
  resultMinMaxArray3,
  resultMinMaxArray4,
  resultMinMaxArray5,
  resultMinMaxArray6,
  str1,
  str2,
  str3,
  str4,
  str5,
  str6,
  resultstr1,
  resultStr2,
  resultStr3,
  resultStr4,
  resultStr5,
  resultStr6,
  resultSum1,
  resultSum2,
  resultSum3,
  resultSum4,
  resultSum5,
  resultSum6,
};
