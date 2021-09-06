import * as express from "express";
import * as routes from "./routes";
import { sequelize } from "./models/index";

const app = express();

const PORT = 3001;

app.use(routes.usersRoutes.users);

(async () => {
  await sequelize.sync({ force: false });

  app.listen(PORT, () => console.info(`Server running on port ${PORT}`));
})();

export { app };
