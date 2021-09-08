const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const axios = require('axios');

chai.should();

const basicUrl = 'http://localhost:3001/api';

const newUserAssertion = {
  name: 'IntNum1',
  age: 23,
  additional_info: 'qwerty123',
};

const newUserAssertionUpdate = {
  name: 'I',
  age: 0,
  additional_info: '1',
};

const emptyUser = {};

const notFullyUser1 = {
  name: 'IntNum1',
};

const notFullyUser2 = {
  name: 'IntNum1',
  age: 23,
};

const notFullyUser3 = {
  name: 'IntNum1',
  additional_info: 'qwerty123',
};

const notExistingUserId = 1;

const error400 = 'Request failed with status code 400';

const error404 = 'Request failed with status code 404';

describe('Crud api integration tests', () => {
  describe('Positive test', () => {
    it('should get hello message on home page', async () => {
      const result = await axios.get(basicUrl);

      expect(result.status).eq(200);
      expect(result.data).should.be.a('object');
      expect(result.data).to.have.property('message');
      expect(result.data.message).eq('Home page');
    });

    it('should create a user with valid data', async () => {
      const result = await axios.post(`${basicUrl}/users`, newUserAssertion);

      expect(result.status).eq(201);
      expect(result.data).should.be.a('object');
      expect(result.data).to.have.property('user');
      expect(result.data).to.have.property('status');

      await axios.delete(`${basicUrl}/users/${result.data.user.id}`);
    });

    it('should get all users', async () => {
      await axios.post(`${basicUrl}/users`, newUserAssertion);

      const result = await axios.get(`${basicUrl}/users`);

      expect(result.status).eq(200);
      result.data.reverse();
      expect(result.data[0].name).eq(newUserAssertion.name);
      expect(result.data[0].age).eq(newUserAssertion.age);
      expect(result.data[0].additional_info).eq(
        newUserAssertion.additional_info,
      );

      await axios.delete(`${basicUrl}/users/${result.data[0].id}`);
    });

    it('should get user by id with valid data', async () => {
      const newUser = await axios.post(`${basicUrl}/users`, newUserAssertion);
      const result = await axios.get(`${basicUrl}/users/${newUser.data.user.id}`);

      expect(result.status).eq(200);
      expect(result.data).to.have.property('user');
      expect(result.data).to.have.property('status');
      expect(result.data.user.id).eq(newUser.data.user.id);
      expect(result.data.user.name).eq(newUserAssertion.name);
      expect(result.data.user.age).eq(newUserAssertion.age);
      expect(result.data.user.additional_info).eq(newUserAssertion.additional_info);
      expect(result.data.status).eq('existing');

      await axios.delete(`${basicUrl}/users/${newUser.data.user.id}`);
    });

    it('should update user with valid data', async () => {
      const newUser = await axios.post(`${basicUrl}/users`, newUserAssertion);
      const result = await axios.put(`${basicUrl}/users/${newUser.data.user.id}`, newUserAssertionUpdate);

      expect(result.status).eq(200);
      expect(result.data).should.be.a('object');
      expect(result.data).to.have.property('status');
      expect(result.data.status).eq('Successful updated');

      const updatedUser = await axios.get(`${basicUrl}/users/${newUser.data.user.id}`);

      expect(updatedUser.data.user.name).eq(newUserAssertionUpdate.name);
      expect(updatedUser.data.user.age).eq(newUserAssertionUpdate.age);
      expect(updatedUser.data.user.additional_info).eq(newUserAssertionUpdate.additional_info);

      await axios.delete(`${basicUrl}/users/${newUser.data.user.id}`);
    });

    it('should delete user by id with valid data', async () => {
      const newUser = await axios.post(`${basicUrl}/users`, newUserAssertion);
      const result = await axios.delete(`${basicUrl}/users/${newUser.data.user.id}`);

      expect(result.status).eq(200);
      expect(result.data).to.have.property('status');
      expect(result.data.status).eq('Successful deleted');
    });
  });

  describe('Negative test', () => {
    it('should not create a user with empty data', async () => {
      try {
        const result = await axios.post(`${basicUrl}/users`, emptyUser);
      } catch (err) {
        expect(err.message).eq(error400);
      }
    });

    it('should not create a user with not fully data', async () => {
      try {
        const result = await axios.post(`${basicUrl}/users`, notFullyUser1);
      } catch (err) {
        expect(err.message).eq(error400);
      }
    });

    it('should not create a user with not fully data', async () => {
      try {
        const result = await axios.post(`${basicUrl}/users`, notFullyUser2);
      } catch (err) {
        expect(err.message).eq(error400);
      }
    });

    it('should not create a user with not fully data', async () => {
      try {
        const result = await axios.post(`${basicUrl}/users`, notFullyUser3);
      } catch (err) {
        expect(err.message).eq(error400);
      }
    });

    it('should get error message when getting not existing user', async () => {
      try {
        const result = await axios.get(`${basicUrl}users/${notExistingUserId}`);
      } catch (err) {
        expect(err.message).eq(error404);
      }
    });

    it('should get error message when deleting not existing user', async () => {
      try {
        const result = await axios.delete(`${basicUrl}/users/${notExistingUserId}`);
      } catch (err) {
        expect(err.message).eq(error404);
      }
    });

    it('should get error message when updating not existing user', async () => {
      try {
        const result = await axios.put(`${basicUrl}/users/${notExistingUserId}`, newUserAssertion);
      } catch (err) {
        expect(err.message).eq(error404);
      }
    });
  });
});
