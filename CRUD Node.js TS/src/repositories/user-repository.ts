import { User } from "../models/user";

export const findAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

export const findByUserId = async (userId: string) => {
  const user = await User.findByPk(userId);

  return user;
};

export const createNewUser = async (newUser: any) => {
  const createdUser = await User.create(newUser);

  return createdUser;
};

export const updateByUserId = async (user: any, userId: string) => {
  const { name, age, additional_info } = user;
  const updatedUser = await User.update(
    {
      name: name,
      age: age,
      additional_info: additional_info,
    },
    { where: { id: userId } }
  );

  return updatedUser;
};

export const deleteByUserId = async (userId: string) => {
  const user = await User.destroy({ where: { id: userId } });

  return user;
};
