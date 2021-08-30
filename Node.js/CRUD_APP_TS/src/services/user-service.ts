import {userRepository} from '../repositories'

export const getUsers = async () => {
  let users = await userRepository.findAllUsers();
  
  return users;
};

export const getByUserId = async (userId: string) => {
    try {
        let user = await userRepository.findByUserId(userId);
        return user;
    }
    catch(err){
        throw err
    }
};

export const createNewUser = async (newUser: any) => {
    try {
        let createdUser = await userRepository.createNewUser(newUser);
        return createdUser;
    }
    catch(err){
        throw err;
    }
};

export const updateByUserId = async (user: any,userId: string) => {
    try {
        let updatedUser = await userRepository.updateByUserId(user, userId);
        return updatedUser;  
    }
    catch(err){
        throw err;
    }  
};

export const deleteByUserId = async (userId: string) => {
    try {
        let user = await userRepository.deleteByUserId(userId)
        return user;
    }
    catch(err){
        throw err;
    }  
};
