const chai = require('chai');
const { expect } = require('chai');
const request = require('../../commonTests');
const UserAssertion = require('../../testData/data');
let test_data = new UserAssertion.UserAssertion();

chai.should();

describe('Crud api integration tests', () => {
  describe('Positive test', () => {
    it('should update user with valid data', async () => {
      const newUserAssertion = test_data.newUserAssertion();
      const newUserAssertionUpdate = test_data.newUserAssertion();
      const newUser = await request.request.post('api/users').send(newUserAssertion);
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
  });

  describe('Negative test', () => {
    it('should get error message when updating not existing user', async () => {
      const newUserAssertion = test_data.newUserAssertion();
      const newUser = await request.request
        .put(`api/users/${test_data.newUserAssertion("notExistingUserId")}`)
        .send(newUserAssertion);

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('status');
      expect(newUser.body.status).eq('No such user');
    });
  });
});
