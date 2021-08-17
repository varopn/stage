
module.exports = app => {
       const users = require("../controllers/crud.controller.js");
     
       app.post("/users", users.createNewUser);
     
       app.get("/users", users.getAllUsers);
     
       app.get("/users/:id", users.findByUserId);
     
       app.delete("/users/:id", users.deleteByUserId);
     
       app.delete("/users", users.deleteAllUsers);
     };