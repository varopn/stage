import { User } from '../models/user';

export const findAllUsers = async () => {
    try {
      let users = await User.findAll();
      return users;
    }
    catch(err) {
      throw err;
    }
};  
export const findByUserId = async (userId: string) => {
    try {
      let user = await User.findByPk(userId);
      return user;
    }
    catch(err){
      throw err;
    }
};
export const createNewUser = async (newUser: any) => {
    try {
      let createdUser = await User.create(newUser);

      return createdUser;
    }
    catch(err) {
      throw err;
    }
};
export const updateByUserId = async (user: any, userId: string) => {
    try {
      let { name, age, additional_info } = user;
      let updatedUser = await User.update({
        name: name,
        age: age,
        additional_info: additional_info
      }, {where: {id: userId}});

        return updatedUser;
    }
    catch(err) {
        throw err;
    }
};
export const deleteByUserId = async (userId: string) => {
    try {
        let user = await User.destroy({where: {id: userId}})
        return user
    }
    catch(err) {
        throw err;
    }
};