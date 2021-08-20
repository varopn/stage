const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const services = require('../services/');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", router.get("/users"));

router.post("/users", async (req, res) => {
  if (!req.body) {
    res.status(400).send(({status: "No fully body"}));
    console.log(req.body.name);
  } else {
    await services.userService.createNewUser({ 
      name: req.body.name,
      age: req.body.age,
      additional_info: req.body.additional_info
      }).then((user) => {
        console.log(user);
        if(!user) {
          throw err;
        };
        res.status(201).send({user, status: "created"});
      }).catch((err)=> { 
        console.log(err);
        return res.status(500).send({status: "Server error"});
        });
    };
});
    
router.get("/users", async (req, res) => {
    await services.userService.getUsers().then((users)=>{
      console.log(users);

      if(users.length === 0) {
        res.status(204).send({status: "WE DON't HAVE USERS"});
      };
  
      res.status(200).send(users);
    }).catch((err)=>{
      console.log(err);
      return res.status(500).send({status: "Server error"});
    });
});
  
router.put("/users/:id", async (req, res) => {
  await services.userService.getByUserId(req.params.id).then(async (user)=>{
    console.log(user);

    if(!user) {
      res.status(404).send({status: "No such user"});
    } else {
      await services.userService.updateByUserId({
        name: req.body.name,
        age: req.body.age,
        additional_info: req.body.additional_info
      }, req.params.id).then(()=> {
        res.status(200).send({status: "Successful updated"});
      }).catch((err)=>{
        console.log(err);
        return res.status(500).send({status: "Server error"});
      });
    };
  })
  .catch(err=>{
    console.log(err);
    return res.status(500).send({status: "Server error"});
  });
});
  
router.get("/users/:id", async (req, res) => {
    await services.userService.getByUserId(req.params.id).then((user)=>{
      console.log(user);
  
      if(!user){
        res.status(404).send({status: "No such user"});
      } else
      res.status(200).send({user, status: "existing"});
    })
    .catch(err=>{
      console.log(err);
      return res.status(500).send({status: "server error"});
    });
});
  
router.delete("/users/:id", async (req, res) => {
    await services.userService.getByUserId(req.params.id).then(async (user)=>{
      console.log(user);
  
      if(!user) {
        res.status(404).send({status: "No such user"});
      } else {
        await services.userService.deleteByUserId(req.params.id).then(()=>{
          res.status(200).send({status: "Successful deleted"});
        }).catch((err) => {
          console.log(err);
          return res.status(500).send({status: "Server error"});
        });
      };
    })
    .catch((err)=>{
      console.log(err);
      return res.status(500).send({status: "Server error"});
    });
});

module.exports = router;