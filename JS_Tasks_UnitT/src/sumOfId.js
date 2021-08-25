function sumOfIds(users) {
  return users.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );
}

module.exports = sumOfIds;
