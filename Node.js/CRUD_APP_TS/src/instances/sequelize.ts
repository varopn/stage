import {Sequelize} from 'sequelize-typescript';
import * as dotenv from "dotenv";
import {User} from "../models/user"

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

export const sequelize = new Sequelize("Users", "admin", "12345678", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  },
  models: [User],
});