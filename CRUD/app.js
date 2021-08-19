const express = require('express');
const routes = require('./routes/');

const app = express();

app.use('/', routes.usersRoutes);

app.listen(3001, () => {
  console.log("Successful connection to server");
});

