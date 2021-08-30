const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const services = require('../services/');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/",async (req, res) => {
  try {
    let users = await services.userService.getUsers();
    console.log(users);
    res.render("index.hbs", {
    users
    });
}
catch(err) {
    res.send(err);
}
});

router.get("/create",async (req, res) => {
  try {
    res.render("create.hbs");
}
catch(err) {
    res.send(err);
}
});

router.post("/create/users", async (req, res) => {
  await services.userService.createNewUser({ 
    name: req.body.name,
    age: req.body.age,
    additional_info: req.body.additional_info
  }).then((user) => {
    console.log(user);
    if(!user) {
      throw err;
    };
    res.redirect("/");
  }).catch((err)=> { 
      console.log(err);
      return res.redirect("/");
    });
});
     
router.get("/update/users/:id", async (req, res) => {
  await services.userService.getByUserId(req.params.id).then(async (user)=>{
    console.log(user);
    res.render("edit.hbs", {
      user: user
    });
  })
  .catch(err=>{
    console.log(err); 
    return res.redirect("/");
  });
});
  
router.post("/save/users/", async (req, res) => {
  await services.userService.updateByUserId({
    name: req.body.name,
    age: req.body.age,
    additional_info: req.body.additional_info
  }, req.body.id).then(()=> {
    res.redirect("/");
  }).catch((err)=>{
    console.log(err);
    return res.redirect("/");
  });
});

router.post("/delete/users/:id", async (req, res) => {
  await services.userService.deleteByUserId(req.params.id).then(()=>{
    res.redirect("/");
  }).catch((err) => {
      console.log(err);
      return res.redirect("/");
    });
});

module.exports = router;