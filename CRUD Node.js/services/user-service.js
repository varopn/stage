let repositories = null;

const getUsers = async () => {
  const users = await repositories.userRepository.findAllUsers();

  return users;
};

const getByUserId = async (userId) => {
  const user = await repositories.userRepository.findByUserId(userId);

  return user;
};

const createNewUser = async (newUser) => {
  const createdUser = await repositories.userRepository.createNewUser(newUser);

  return createdUser;
};

const updateByUserId = async (user, userId) => {
  const updatedUser = await repositories.userRepository.updateByUserId(user, userId);

  return updatedUser;
};

const deleteByUserId = async (userId) => {
  const user = await repositories.userRepository.deleteByUserId(userId);

  return user;
};

module.exports = (rep) => {
  repositories = rep;
  return {
    getUsers,
    getByUserId,
    createNewUser,
    updateByUserId,
    deleteByUserId,
  };
};
