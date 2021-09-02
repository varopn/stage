import * as express from "express";
import * as dotenv from "dotenv";
import * as routes from "./routes"
import {sequelize} from './models/index';


export const app = express();

dotenv.config();

if (!process.env.PORT) {
    process.env.PORT = '3001';
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(routes.usersRoutes.users);

(async () => {
    await sequelize.sync({force: false});
  
    app.listen(
        PORT,
        () => console.info(`Server running on port ${PORT}`)
      );
  })();