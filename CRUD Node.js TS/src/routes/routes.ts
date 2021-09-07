import { Router, Request, Response } from "express";
import * as bodyParser from "body-parser";
import * as services from "../services";

const users = Router();
users.route("/api");

users.use(bodyParser.json());
users.use(bodyParser.urlencoded({ extended: true }));

users.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Home page" }).status(200);
});

users.post("/api/users", async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).send({ status: "No fully body" });
  } else if (!req.body.name || !req.body.age || !req.body.additional_info) {
    res.status(400).send({ status: "No fully body" });
  } else {
    await services.userService
      .createNewUser({
        name: req.body.name,
        age: req.body.age,
        additional_info: req.body.additional_info,
      })
      .then((user: any) => {
        if (!user) {
          throw "Error";
        }
        res.status(201).send({ user, status: "created" });
      })
      .catch((err: any) => {
        console.log(err);
        return res.status(500).send({ status: "Server error" });
      });
  }
});

users.get("/api/users", async (req: Request, res: Response) => {
  try {
    await services.userService.getUsers().then((users: any) => {
      if (users.length === 0) {
        res.status(204).send({ status: "WE DON't HAVE USERS" });
      }

      res.status(200).send(users);
    });
  } catch (err) {
    console.log(err);
  }
});

users.put("/api/users/:id", async (req: Request, res: Response) => {
  await services.userService
    .getByUserId(req.params.id)
    .then(async (user) => {
      if (!user) {
        res.status(404).send({ status: "No such user" });
      } else {
        await services.userService
          .updateByUserId(
            {
              name: req.body.name,
              age: req.body.age,
              additional_info: req.body.additional_info,
            },
            req.params.id
          )
          .then(() => {
            res.status(200).send({ status: "Successful updated" });
          })
          .catch((err: any) => {
            return res.status(500).send({ status: "Server error" });
          });
      }
    })
    .catch((err: any) => {
      console.log(err);
      return res.status(500).send({ status: "Server error" });
    });
});

users.get("/api/users/:id", async (req: Request, res) => {
  await services.userService
    .getByUserId(req.params.id)
    .then((user) => {

      if (!user) {
        res.status(404).send({ status: "No such user" });
      } else res.status(200).send({ user, status: "existing" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({ status: "server error" });
    });
});

users.delete("/api/users/:id", async (req: Request, res: Response) => {
  await services.userService
    .getByUserId(req.params.id)
    .then(async (user) => {
      if (!user) {
        res.status(404).send({ status: "No such user" });
      } else {
        await services.userService
          .deleteByUserId(req.params.id)
          .then(() => {
            res.status(200).send({ status: "Successful deleted" });
          })
          /* istanbul ignore next */
          .catch((err: any) => {
            console.log(err);
            return res.status(500).send({ status: "Server error" });
          });
      }
    })
    .catch((err: any) => {
      console.log(err);
      return res.status(500).send({ status: "Server error" });
    });
});

export { users };
