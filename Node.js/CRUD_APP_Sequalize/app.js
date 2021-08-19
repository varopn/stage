const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const dbConfig = require("./config/db.config.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Home page" });
});

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {

  dialect: dbConfig.dialect,
  host: dbConfig.host,
  define: {
    timestamps: false
  }

});

const User = sequelize.define('User', {

  id : {

    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },
  name : {

    type: Sequelize.STRING

  },
  age : {

    type: Sequelize.INTEGER

  },
  additional_info: {

    type: Sequelize.STRING

  }
});

app.post("/users", (req, res) => {
  if (!req.body) {

    res.status(400).send(({status: "No fully body"}));

  } else {

      User.create({

        name: req.body.name,
        age: req.body.age,
        additional_info: req.body.additional_info

      }).then((user)=>{

        console.log(user);
        if(!user) {
          res.status(500).send(({status: "Error"}));
        }

        res.status(200).send({user, status: "created"});
      }).catch(err=> { 

        console.log(err);

      });
    };
});
  
app.get("/users", (req, res) => {
  User.findAll().then(users=>{
    console.log(users);

    if(users.length === 0) {
      res.status(200).send({status: "we DON't HAVE USERS"});
    }

    res.status(200).send(users);
  }).catch(err=>console.log(err));
});

app.put("/users/:id", (req, res) => {

  User.update({

    name: req.body.name,
    age: req.body.age,
    additional_info: req.body.additional_info

  }, {where: {id: req.params.id}}).then((user)=> {
    if(!user) {
      res.status(404).send({status: "User is not existing"});
    }
    res.status(200).send({user, status: "Successful updated"});
  })
  .catch((err)=>{
    console.log(err);
  });
});

app.get("/users/:id", (req, res) => {
  User.findByPk(req.params.id).then((user)=>{

    console.log(user);

    if(!user){

      res.status(404).send({status: "No such user"});

    }

    res.status(200).send({user, status: "existing"});
  })
  .catch(err=>console.log(err));
});

app.delete("/users/:id", (req, res) => {
  User.findByPk(req.params.id).then((user)=>{

    console.log(user);

    if(!user) {
      res.status(404).send({status: "No such user"});
    }

    User.destroy({where: {id: user.id}}).then(()=>{

      res.status(200).send({status: "Successful deleted"});

    }).catch(err => {

      console.log(err);

    });
  })
  .catch(err=>console.log(err));
});

app.delete("/users", (req, res) => {

  User.destroy({where: {}}).then(()=> {

    res.status(200).send({status: "why u deleted all records"});

  }).catch(err=>console.log(err));
});

sequelize.sync().then(()=>{
    console.log("Successful connection to database");
    app.listen(3001, function(){
      console.log("Successful connection to server");
    });
}).catch(err=>console.log(err));

