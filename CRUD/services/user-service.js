let repositories = null;

const getUsers = async () => {
    try {
        let users = await repositories.userRepository.findAllUsers();
        return users;
    }
    catch(err) {
        throw err;
    }
};

const getByUserId = async (userId) => {
    try {
        let user = await repositories.userRepository.findByUserId(userId);
        return user;
    }
    catch(err){
        throw err
    }
};

const createNewUser = async (newUser) => {
    try {
        let createdUser = await repositories.userRepository.createNewUser(newUser);
        return createdUser;
    }
    catch(err){
        throw err;
    }
};

const updateByUserId = async (user,userId) => {
    try {
        let updatedUser = await repositories.userRepository.updateByUserId(user, userId);
        return updatedUser;  
    }
    catch(err){
        throw err;
    }  
};

const deleteByUserId = async (userId) => {
    try {
        let user = await repositories.userRepository.deleteByUserId(userId)
        return user;
    }
    catch(err){
        throw err;
    }  
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