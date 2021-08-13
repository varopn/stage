function searchingTripleA(str) {
    let regExp = /a{3}b/g;

    return str.replace(regExp, '!b');
}

let str = 'aa aba abba abbba abbbba abbbbba aaab aab ab a abbba aaaab';

console.log(searchingTripleA(str));