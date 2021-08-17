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
    primaryKey: true,
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
  User.create({
    name: req.body.name,
    age: req.body.age,
    additional_info: req.body.additional_info
  }).then((user)=>{
    console.log(user);
    res.status(201).send({user, status: "created"});
  }).catch(err=>console.log(err));
});
     
app.get("/users", (req, res) => {
  User.findAll().then(users=>{
    console.log(users);
    res.status(200).send(users);
  }).catch(err=>console.log(err));
});

app.put("/users/:id", (req, res) => {
  User.update({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    additional_info: req.body.additional_info
  }, {where: {id: req.params.id}}).then((user) => {
    console.log(user)
  }).then(()=> {
    if(user === null) {
      console.urlencoded("00");
    }
    res.status(200).send({status: "Successful updated"});
  })
  .catch(err=>{
    console.log(err);
    if(user === null) {
      res.status(404).send({status: "User is not existing"});
    }
    res.status(500).send({status: "Error updating user"});
  });
});

app.get("/users/:id", (req, res) => {
  User.findByPk(req.params.id).then((user)=>{
    console.log(user);
    res.status(200).send(user);
  })
  .catch(err=>console.log(err));
});

app.delete("/users/:id", (req, res) => {
  User.destroy(req.params.id).then(()=>{
    res.status(200).send({status: "Successful deleted"});
  }).catch(err=>console.log(err));
});

app.delete("/users", (req, res) => {
  User.destroy({where: {}}).then(()=> {
    res.status(200).send({status: "why u deleted all records"});
  }).catch(err=>console.log(err));
});

sequelize.sync().then(()=>{
    console.log("Successful connection to database");
}).catch(err=>console.log(err));

app.listen(3001, function(){
  console.log("Successful connection to server");
});