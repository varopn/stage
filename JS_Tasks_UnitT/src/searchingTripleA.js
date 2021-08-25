function searchingTripleA(str) {
  const regExp = /a{3}b/g;

  return str.replace(regExp, '!b');
}

module.exports = searchingTripleA;
