const sql = require("./db.js");

const User = function(user) {
  this.name = user.name;
  this.age = user.age;
  this.additional_info = user.additional_info;
};


User.createNewUser = (newUser, result) => {

  const queryInsert = "INSERT INTO Users SET ?";
  sql.query(queryInsert, newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log( { ...newUser });
    result(null, { ...newUser }); 

  });
};

User.findByUserId = (UserId, result) => {
  const queryFintbyId = `SELECT * FROM Users WHERE id = '${UserId}'`;
  sql.query(queryFintbyId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("User: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

 User.getAllUsers = result => {
   const queryAll = "SELECT * FROM Users";
  sql.query(queryAll, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Users: ", res);
    result(null, res);
  });
};


User.deleteByUserId = (userId, result) => {
  const queryDelete = "DELETE FROM Users WHERE id = ?";
  sql.query(queryDelete, userId, (err, res) => {
    if (err) {
      console.log("error: ", err); 
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleting uset with id: ", userId);
    result(null, res);
  });
};

User.deleteAllUsers = result => {
  sql.query("DELETE FROM Users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Users`);
    result(null, res);
  });
};

module.exports = User;