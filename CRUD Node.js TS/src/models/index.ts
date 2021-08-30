import {Sequelize} from 'sequelize-typescript';
import {User} from "./user"

export const sequelize = new Sequelize("Users", "admin", "12345678", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  },
  models: [User],
});




