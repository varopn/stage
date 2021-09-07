import chai = require("chai");
import chaiHttp = require("chai-http");
import { not } from "sequelize/types/lib/operators";
import { app } from "../../index";

const { expect } = require("chai");
const request = require("supertest");

chai.should();

chai.use(chaiHttp);

const newUserAssertion = {
  name: "IntNum1",
  age: 23,
  additional_info: "qwerty123",
};

const emptyUser = {};

const notFullyUser1 = {
  name: "IntNum1",
};

const notFullyUser2 = {
  name: "IntNum1",
  age: 23,
};

const notFullyUser3 = {
  name: "IntNum1",
  additional_info: "qwerty123",
};

const notExistingUserId = 1;

const existingUserId = 8;

describe("Crud api integration tests", () => {
  describe("Positive test", () => {
    it("should get hello message on home page", async () => {
      const newUser = await request(app)
        .get("/api");
      expect(newUser.statusCode).eq(200);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("message");
      expect(newUser.body.message).eq("Home page");
    });

    it("should create a user with valid data", async () => {
      const newUser = await request(app)
        .post("/api/users")
        .send(newUserAssertion);
      expect(newUser.statusCode).eq(201);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("user");
      expect(newUser.body).to.have.property("status");

      await request(app).delete(`/api/users/${newUser.body.user.id}`);
    });

    it("should get all users", async () => {
      await request(app)
        .post("/api/users")
        .send(newUserAssertion);

      const userList = await request(app).get("/api/users");

      expect(userList.statusCode).eq(200);
      userList.body.reverse();
      expect(userList.body[0].name).eq(newUserAssertion.name);
      expect(userList.body[0].age).eq(newUserAssertion.age);
      expect(userList.body[0].additional_info).eq(newUserAssertion.additional_info);

      await request(app).delete(`/api/users/${userList.body[0].id}`);
    });

    it("should get user by id with valid data", async () => {
      const newUser = await request(app).get(`/api/users/${8}`);
      expect(newUser.statusCode).eq(200);
    });

    it("should update user with valid data", async () => {
      const newUser = await request(app)
        .put("/api/users/8")
        .send(newUserAssertion);
      expect(newUser.statusCode).eq(200);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
    });

    it("should delete user by id with valid data", async () => {
      const newUser = await request(app).get(`/api/users/${8}`);
      expect(newUser.statusCode).eq(200);
    });
  });

  describe("Negative test", () => {
    it("should not create a user with empty data", async () => {
      const newUser = await request(app)
        .post("/api/users")
        .send(emptyUser);
      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should not create a user with not fully data", async () => {
      const newUser = await request(app)
        .post("/api/users")
        .send(notFullyUser1);
      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should not create a user with not fully data", async () => {
      const newUser = await request(app)
        .post("/api/users")
        .send(notFullyUser2);
      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should not create a user with not fully data", async () => {
      const newUser = await request(app)
        .post("/api/users")
        .send(notFullyUser3);
      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should get error message when getting not existing user", async () => {
      const newUser = await request(app)
        .get("/api/users/" + notExistingUserId);
      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No such user");
    });

    it("should get error message when deleting not existing user", async () => {
      const newUser = await request(app)
        .delete("/api/users/" + notExistingUserId);
      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No such user");
    });

    it("should get error message when updating not existing user", async () => {
      const newUser = await request(app)
        .put("/api/users/" + notExistingUserId)
        .send(newUserAssertion);

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No such user");
    });
  });
});
