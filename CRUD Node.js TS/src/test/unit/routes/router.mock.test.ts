import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const chai = require("chai");

const { expect } = chai;
const mock = new MockAdapter(axios);

describe("Positive testing GET functions", function () {
  beforeEach(() => {
    mock.reset();
  });

  it("should get the endpoint", function () {
    const data = { message: "Home page" };

    mock.onGet("https://localhost:3001/api").reply(200, data);
    expect(200);
  });

  it("should return users", function () {
    mock.onGet("https://localhost:3001/api/users").reply(200, [
      {
        users: [
          {
            name: "Test",
            age: "Redrick Shukhart",
            additional_info: "sfg",
          },
        ],
      },
    ]);

    return axios.get("https://localhost:3001/api/users").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.data.length).to.equal(1);
      expect(response.data[0]).to.have.property("users");
      expect(response.data[0].users[0]).to.have.property("name");
      expect(response.data[0].users[0]).to.have.property("age");
      expect(response.data[0].users[0]).to.have.property("additional_info");
    });
  });

  it("should return user by id", function () {
    mock.onGet("https://localhost:3001/api/users/1").reply(200, {
      user: {
        id: 1,
        name: "Test",
        age: "Redrick Shukhart",
        additional_info: "sfg",
      },
      status: "existing",
    });

    return axios.get("https://localhost:3001/api/users/1").then((response) => {
      expect(response.status).to.eql(200);
      expect(response.data).to.have.property("user");
      expect(response.data.user).to.have.property("name");
      expect(response.data.user).to.have.property("age");
      expect(response.data.user).to.have.property("additional_info");
      expect(response.data).to.have.property("status");
      expect(response.data.status).to.eql("existing");
      expect(200);
    });
  });
});

describe("Positive testing Post function", function () {
  let instance: any;

  beforeEach(() => {
    instance = axios.create();
    mock.reset();
  });

  it("should simulate user creation", function () {
    mock
      .onPost("https://localhost:3001/api/users", {
        name: "Test",
        age: "Redrick Shukhart",
        additional_info: "sfg",
      })
      .reply(201, {
        user: {
          id: 1,
          name: "Test",
          age: "Redrick Shukhart",
          additional_info: "sfg",
        },

        status: "created",
      });

    return instance
      .post("https://localhost:3001/api/users", {
        name: "Test",
        age: "Redrick Shukhart",
        additional_info: "sfg",
      })
      .then((response: any) => {
        expect(response.status).to.eql(201);
        expect(response.data).to.have.property("user");
        expect(response.data.user).to.have.property("name");
        expect(response.data.user).to.have.property("age");
        expect(response.data.user).to.have.property("additional_info");
        expect(response.data).to.have.property("status");
        expect(response.data.status).to.eql("created");
      });
  });
});

describe("Positive testing Put function", function () {
  let instance: any;

  beforeEach(() => {
    instance = axios.create();
    mock.reset();
  });

  it("should simulate user updating", function () {
    mock
      .onPut("https://localhost:3001/api/users/1", {
        name: "Test",
        age: "Redrick Shukhart",
        additional_info: "sfg",
      })
      .reply(200, {
        status: "Successful updated",
      });

    return instance
      .put("https://localhost:3001/api/users/1", {
        name: "Test",
        age: "Redrick Shukhart",
        additional_info: "sfg",
      })
      .then((response: any) => {
        expect(response.status).to.eql(200);
        expect(response.data).to.have.property("status");
        expect(response.data.status).to.eql("Successful updated");
      });
  });
});

describe("Positive testing DELETE function", function () {
  let instance: any;

  beforeEach(() => {
    instance = axios.create();
    mock.reset();
  });

  it("should simulate user updating", function () {
    mock.onDelete("https://localhost:3001/api/users/1").reply(200, {
      status: "Successful deleted",
    });

    return instance
      .delete("https://localhost:3001/api/users/1")
      .then((response: any) => {
        expect(response.status).to.eql(200);
        expect(response.data).to.have.property("status");
        expect(response.data.status).to.eql("Successful deleted");
      });
  });
});
