const express = require('express');
const routes = require('./routes/');
const exphbs = require('express-handlebars');

const app = express();

app.engine("hbs", exphbs(
  {
    layoutsDir: "views/layouts", 
    defaultLayout: "layout",
    extname: "hbs"
  }
));

app.set("view engine", "hbs");

app.use('/', routes.usersRoutes);

app.listen(3001, () => {
  console.log("Successful connection to server");
});

