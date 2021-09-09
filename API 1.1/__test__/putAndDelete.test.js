const chai = require("chai");
const request = require('../commonTests');
const { expect } = require("chai");

chai.should();

const newUserAssertion = {
  name: "IntNum1",
  age: 23,
  additional_info: "qwerty123",
};

const newUserAssertionUpdate = {
  name: 'I',
  age: 0,
  additional_info: '1',
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

describe("Crud api integration tests", () => {
  describe("Positive test", () => {
    it("should get hello message on home page", async () => {
      const hello = await request.request.get("api");

      expect(hello.statusCode).eq(200);
      expect(hello.body).should.be.a("object");
      expect(hello.body).to.have.property("message");
      expect(hello.body.message).eq("Home page");
    });

    it("should create a user with valid data", async () => {
      const newUser = await request.request
        .post("api/users")
        .send(newUserAssertion);

      expect(newUser.statusCode).eq(201);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("user");
      expect(newUser.body).to.have.property("status");

      await request.request.delete(`api/users/${newUser.body.user.id}`);
    });

    it("should get all users", async () => {
      await request.request.post("api/users").send(newUserAssertion);

      const userList = await request.request.get("api/users");

      expect(userList.statusCode).eq(200);
      userList.body.reverse();
      expect(userList.body[0].name).eq(newUserAssertion.name);
      expect(userList.body[0].age).eq(newUserAssertion.age);
      expect(userList.body[0].additional_info).eq(
        newUserAssertion.additional_info
      );

      await request.request.delete(`api/users/${userList.body[0].id}`);
    });

    it("should get user by id with valid data", async () => {
      const newUser = await request.request.post("api/users").send(newUserAssertion);
      const currentUser = await request.request.get(`api/users/${newUser.body.user.id}`);

      expect(currentUser.statusCode).eq(200);

      await request.request.delete(`api/users/${newUser.body.user.id}`);
    });

    it("should update user with valid data", async () => {
      const newUser = await request.request.post(`api/users`).send(newUserAssertion);
      const result = await await request.request.put(`api/users/${newUser.body.user.id}`).send(newUserAssertionUpdate);

      expect(result.statusCode).eq(200);
      expect(result.body).should.be.a('object');
      expect(result.body).to.have.property('status');
      expect(result.body.status).eq('Successful updated');

      const updatedUser = await request.request.get(`api/users/${newUser.body.user.id}`);

      expect(updatedUser.body.user.name).eq(newUserAssertionUpdate.name);
      expect(updatedUser.body.user.age).eq(newUserAssertionUpdate.age);
      expect(updatedUser.body.user.additional_info).eq(newUserAssertionUpdate.additional_info);

      await request.request.delete(`api/users/${newUser.body.user.id}`);
    });

    it("should delete user by id with valid data", async () => {
      const newUser = await request.request.post("api/users").send(newUserAssertion);
      const result = await request.request.delete(`api/users/${newUser.body.user.id}`);

      expect(result.statusCode).eq(200);
      expect(result.body).to.have.property('status');
      expect(result.body.status).eq('Successful deleted');
    });
  });

  describe("Negative test", () => {
    it("should not create a user with empty data", async () => {
      const newUser = await request.request.post("api/users").send(emptyUser);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should not create a user with not fully data", async () => {
      const newUser = await request.request.post("api/users").send(notFullyUser1);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should not create a user with not fully data", async () => {
      const newUser = await request.request.post("api/users").send(notFullyUser2);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should not create a user with not fully data", async () => {
      const newUser = await request.request.post("api/users").send(notFullyUser3);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No fully body");
    });

    it("should get error message when getting not existing user", async () => {
      const newUser = await request.request.get(`api/users/${notExistingUserId}`);

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No such user");
    });

    it("should get error message when deleting not existing user", async () => {
      const newUser = await request.request.delete(
        `api/users/${notExistingUserId}`
      );

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No such user");
    });

    it("should get error message when updating not existing user", async () => {
      const newUser = await request.request
        .put(`api/users/${notExistingUserId}`)
        .send(newUserAssertion);

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a("object");
      expect(newUser.body).to.have.property("status");
      expect(newUser.body.status).eq("No such user");
    });
  });
});
