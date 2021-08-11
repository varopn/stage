let str = 'aa aba abba abbba abbbba abbbbba aaab aab ab a abbba aaaab';

let regExp = /a{3}b/g;

let searchStr = str.replace(regExp, '!b');

console.log(searchStr);