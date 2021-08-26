import * as express from "express";
import * as dotenv from "dotenv";
import {users} from "./routes/route"
import {sequelize} from './instances/sequelize';

const app = express();

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(users);

(async () => {
    await sequelize.sync({force: false});
  
    app.listen(
        PORT,
        () => console.info(`Server running on port ${PORT}`)
      );
  })();