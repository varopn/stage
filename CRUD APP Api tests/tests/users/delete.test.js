const chai = require('chai');
const { expect } = require('chai');
const request = require('../../commonTests');
const UserAssertion = require('../../testData/data');
let test_data = new UserAssertion.UserAssertion();

chai.should();


describe('Crud api integration tests', () => {
  describe('Positive test', () => {
    it('should delete user by id with valid data', async () => {
      const newUser = await request.request.post('api/users').send(test_data.newUserAssertion());
      const result = await request.request.delete(`api/users/${newUser.body.user.id}`);

      expect(result.statusCode).eq(200);
      expect(result.body).to.have.property('status');
      expect(result.body.status).eq('Successful deleted');
    });
  });

  describe('Negative test', () => {
    it('should get error message when deleting not existing user', async () => {
      const newUser = await request.request.delete(
        `api/users/${test_data.newUserAssertion("empty")}`,
      );

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('status');
      expect(newUser.body.status).eq('No such user');
    });
  });
});
