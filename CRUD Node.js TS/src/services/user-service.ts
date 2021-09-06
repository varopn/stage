import { userRepository } from "../repositories";

export const getUsers = async () => {
  const users = await userRepository.findAllUsers();

  return users;
};

export const getByUserId = async (userId: string) => {
  const user = await userRepository.findByUserId(userId);

  return user;
};

export const createNewUser = async (newUser: any) => {
  const createdUser = await userRepository.createNewUser(newUser);

  return createdUser;
};

export const updateByUserId = async (user: any, userId: string) => {
  const updatedUser = await userRepository.updateByUserId(user, userId);

  return updatedUser;
};

export const deleteByUserId = async (userId: string) => {
  const user = await userRepository.deleteByUserId(userId);

  return user;
};
