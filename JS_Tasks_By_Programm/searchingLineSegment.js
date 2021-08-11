function searchingLineSegment(str) {
let regExp = /[a-zA-Z]+/g;

return str.match(regExp).slice(1, 5).join(' ');
}

let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lest. Donec convallis dignissim ligula, et rutrum est elat vistibulum eu.';

console.log(searchingLineSegment(str));