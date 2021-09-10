const chai = require('chai');
const { expect } = require('chai');
const request = require('../../commonTests');
const UserAssertion = require('../../test data/data')
let test_data = new UserAssertion.UserAssertion();

chai.should();

describe('Crud api integration tests', () => {
  describe('Positive test', () => {
    it('should create a user with valid data', async () => {
      const newUserAssertion = test_data.newUserAssertion();
      const newUser = await request.request
        .post('api/users')
        .send(newUserAssertion);

      expect(newUser.statusCode).eq(201);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('user');
      expect(newUser.body).to.have.property('status');

      await request.request.delete(`api/users/${newUser.body.user.id}`);
      });
    });
  });

  describe('Negative test', () => {
    it('should not create a user with not fully data', async () => {
      const notFullyUser1 = test_data.newUserAssertion("notFully", 1);
      const newUser = await request.request.post('api/users').send(notFullyUser1);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('status');
      expect(newUser.body.status).eq('No fully body');
    });

    it('should not create a user with not fully data', async () => {
      const notFullyUser2 = test_data.newUserAssertion("notFully", 2);
      const newUser = await request.request.post('api/users').send(notFullyUser2);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('status');
      expect(newUser.body.status).eq('No fully body');
    });

    it('should not create a user with not fully data', async () => {
      const notFullyUser3 = test_data.newUserAssertion("notFully", 3);
      const newUser = await request.request.post('api/users').send(notFullyUser3);

      expect(newUser.statusCode).eq(400);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('status');
      expect(newUser.body.status).eq('No fully body');
    });
});