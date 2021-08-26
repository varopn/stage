import { Router, Request, Response } from "express";
import { User } from "../models/user";
import * as bodyParser from "body-parser"
import {UserService} from "../service/service"

export const users = Router();
users.route('/api');

users.use(bodyParser.json());
users.use(bodyParser.urlencoded({ extended: true }));

users.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Home page" });
});

users.post("/api/users", async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).send(({status: "No fully body"}));
    console.log(req.body.name);
  } else {
    await UserService.createNewUser({ 
      name: req.body.name,
      age: req.body.age,
      additional_info: req.body.additional_info
      }).then((user: any) => {
        console.log(user);
        if(!user) {
          throw "Error";
        };
        res.status(201).send({user, status: "created"});
      }).catch((err: any)=> { 
        console.log(err);
        return res.status(500).send({status: "Server error"});
        });
    };
});
    
users.get("/api/users", async (req: Request, res: Response) => {
    try {
    await UserService.getUsers().then((users: any)=>{
      console.log(users);

      if(users.length === 0) {
        res.status(204).send({status: "WE DON't HAVE USERS"});
      };
  
      res.status(200).send(users);
    })
}
catch{
    console.log("wergwergwe");
}
});
  
users.put("/api/users/:id", async (req: Request, res: Response) => {
  await UserService.getByUserId(req.params.id).then(async (user)=>{
    console.log(user);

    if(!user) {
      res.status(404).send({status: "No such user"});
    } else {
      await UserService.updateByUserId({
        name: req.body.name,
        age: req.body.age,
        additional_info: req.body.additional_info
      }, req.params.id).then(()=> {
        res.status(200).send({status: "Successful updated"});
      }).catch((err: any)=>{
        console.log(err);
        return res.status(500).send({status: "Server error"});
      });
    };
  })
  .catch((err: any)=>{
    console.log(err);
    return res.status(500).send({status: "Server error"});
  });
});
  
users.get("/api/users/:id", async (req: Request, res) => {
    await UserService.getByUserId(req.params.id).then((user)=>{
      console.log(user);
  
      if(!user){
        res.status(404).send({status: "No such user"});
      } else
      res.status(200).send({user, status: "existing"});
    })
    .catch(err=>{
      console.log(err);
      return res.status(500).send({status: "server error"});
    });
});
  
users.delete("/api/users/:id", async (req: Request, res: Response) => {
    await UserService.getByUserId(req.params.id).then(async (user)=>{
      console.log(user);
  
      if(!user) {
        res.status(404).send({status: "No such user"});
      } else {
        await UserService.deleteByUserId(req.params.id).then(()=>{
          res.status(200).send({status: "Successful deleted"});
        }).catch((err: any) => {
          console.log(err);
          return res.status(500).send({status: "Server error"});
        });
      };
    })
    .catch((err: any)=>{
      console.log(err);
      return res.status(500).send({status: "Server error"});
    });
});
