function searchingByCountOfB(str) {
  const regExp = /ab{2,4}a/g;

  return str.match(regExp, '!b');
}

const str = 'aa aba abba abbba abbbba abbbbba';

console.log(searchingByCountOfB(str));
