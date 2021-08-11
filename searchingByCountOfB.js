function searchingByCountOfB(str) {
    let regExp = /ab{2,4}a/g;

    return str.match(regExp, '!b');
}

let str = 'aa aba abba abbba abbbba abbbbba';

console.log(searchingByCountOfB(str));