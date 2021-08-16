const User = require("../models/crud.model.js");

exports.createNewUser = (req, res) => {

  const user = new User({
    name: req.body.name,
    age: req.body.age,
    additional_info: req.body.additional_info
  });


  User.createNewUser(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Code error"
      });
    else res.send(data);
  });
};

exports.getAllUsers = (req, res) => {
  User.getAllUsers ((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error"
      });
    else 
    res.send(data);
  });
};

exports.findByUserId = (req, res) => {
  User.findByUserId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id:  ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error with user " + req.params.Id
        });
      }
    } else res.send(data);
  });
};

exports.deleteByUserId = (req, res) => {
  User.deleteByUserId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error " + req.params.id
        });
      }
    } else res.send({ message: `Successful delete` });
  });
};

exports.deleteAllUsers = (req, res) => {
  User.deleteAllUsers((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Что-то пошло не так во время удаления всех дел"
      });
    else res.send({ message: `Все дела успешно удалены` });
  });
};