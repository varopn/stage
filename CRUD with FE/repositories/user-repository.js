const db = require('../models');

const findAllUsers = async () => {
  const users = await db.User.findAll();

  return users;
};

const findByUserId = async (userId) => {
  const user = await db.User.findByPk(userId);

  return user;
};

const createNewUser = async (newUser) => {
  const { name, age, additional_info } = newUser;
  const createdUser = await db.User.create({
    name,
    age,
    additional_info,
  });

  return createdUser;
};

const updateByUserId = async (user, userId) => {
  const { name, age, additional_info } = user;
  const updatedUser = await db.User.update({
    name,
    age,
    additional_info,
  }, { where: { id: userId } });

  return updatedUser;
};
const deleteByUserId = async (userId) => {
  const user = await db.User.destroy({ where: { id: userId } });

  return user;
};

module.exports = {
  findAllUsers,
  findByUserId,
  createNewUser,
  updateByUserId,
  deleteByUserId,
};
