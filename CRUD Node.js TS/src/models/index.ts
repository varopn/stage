import { Sequelize } from "sequelize-typescript";
import { User } from "./user";

const sequelize = new Sequelize("Users", "admin", "12345678", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
  define: {
    timestamps: false,
  },
  models: [User],
});

export { sequelize };
