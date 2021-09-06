import chai = require("chai");
import chaiHttp = require("chai-http");
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

describe("Crud api integration tests", () => {
  describe("Positive test", () => {
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
      const UserList = await request(app).get("/api/users");
      expect(UserList.statusCode).eq(200);
    });

    it("should get user by id with valid data", async () => {
      const newUser = await request(app).get(`/api/users/${8}`);
      expect(newUser.statusCode).eq(200);
    });

    /* it('should update user with valid data', async() => {
            const newUser = await request(app).post('/api/users').send(newIngetrationUser);
            expect(newUser.statusCode).eq(201);
            expect(newUser.body).should.be.a('object');
            expect(newUser.body).to.have.property('user');
            expect(newUser.body).to.have.property('status');
        }); */
  });
});

describe("Crud api integration tests", () => {
  describe("GET /api/posts, GET all posts", () => {
    it("should get all posts", () => {
      chai
        .request(app)
        .get("/api/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
        });
    });
  });
});
