let str = 'aa aba abba abbba abbbba abbbbba';

let regExp = /ab{2,4}a/g;

let searchStr = str.match(regExp, '!b');

console.log(searchStr);