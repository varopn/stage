function searchingTripleA(str) {
  const regExp = /a{3}b/g;

  return str.replace(regExp, '!b');
}

const str = 'aa aba abba abbba abbbba abbbbba aaab aab ab a abbba aaaab';

console.log(searchingTripleA(str));
