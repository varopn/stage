const db = require('../models/')

const findAllUsers = async () => {
    try {
        let users = await db.User.findAll();
        return users;
    }
    catch(err) {
        throw err;
    }
};

const findByUserId = async (userId) => {
    try {
        let user = await db.User.findByPk(userId);
        return user;
    }
    catch(err) {
        throw err;
    }
};

const createNewUser = async (newUser) => {
    try {
        let { name, age, additional_info } = newUser;
        let createdUser = await db.User.create({
  
            name: name,
            age: age,
            additional_info: additional_info
    
          })
        return createdUser;
    }
    catch(err) {
        throw err;
    }
};

const updateByUserId = async (user, userId) => {
    try {
        let { name, age, additional_info } = user;
        let updatedUser = await db.User.update({
  
            name: name,
            age: age,
            additional_info: additional_info
        
          }, {where: {id: userId}})
        return updatedUser;
    }
    catch(err) {
        throw err;
    }
};
const deleteByUserId = async (userId) => {
    try {
        let user = await db.User.destroy({where: {id: userId}})
        return user
    }
    catch(err) {
        throw err;
    }
};

module.exports = {
    findAllUsers,
    findByUserId,
    createNewUser,
    updateByUserId,
    deleteByUserId,
}

