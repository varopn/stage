const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");


const connection = mysql.createConnection({
    host: dbConfig.hostname,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
  });

  //здесь ничего такого не происходит, просто создаем подключение
  connection.connect(error => {
    if (error) throw error;
    console.log("Successful connection with database");
  });


  module.exports = connection;