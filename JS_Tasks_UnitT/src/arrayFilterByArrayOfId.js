function filteringByArrayOfIds(users, arrayOfIds) {
  if (!arrayOfIds) {
    return users;
  }

  if (arrayOfIds.length === 0) {
    return [];
  }

  return users.filter((user) => arrayOfIds.some((element) => element === user.id));
}

module.exports = filteringByArrayOfIds;
