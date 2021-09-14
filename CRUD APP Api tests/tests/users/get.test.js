const chai = require('chai');
const { expect } = require('chai');
const request = require('../../commonTests');
const UserAssertion = require('../../testData/data');
let test_data = new UserAssertion.UserAssertion();

chai.should();


describe('Crud api integration tests', () => {
  describe('Positive test', () => {
    it('should get hello message on home page', async () => {
      const hello = await request.request.get('api');

      expect(hello.statusCode).eq(200);
      expect(hello.body).should.be.a('object');
      expect(hello.body).to.have.property('message');
      expect(hello.body.message).eq('Home page');
    });

    it('should get all users', async () => {
      const newUserAssertion = test_data.newUserAssertion();
      await request.request.post('api/users').send(newUserAssertion);

      const userList = await request.request.get('api/users');

      expect(userList.statusCode).eq(200);
      userList.body.reverse();
      expect(userList.body[0].name).eq(newUserAssertion.name);
      expect(userList.body[0].age).eq(newUserAssertion.age);
      expect(userList.body[0].additional_info).eq(newUserAssertion.additional_info);

      for (let user of userList.body) {
        expect(user).to.have.property('id');
        expect(user).to.have.property('name');
        expect(user).to.have.property('age');
        expect(user).to.have.property('additional_info');
      }

      await request.request.delete(`api/users/${userList.body[0].id}`);
    });

    it('should get user by id with valid data', async () => {
      const newUserAssertion = test_data.newUserAssertion();
      const newUser = await request.request.post('api/users').send(newUserAssertion);
      const currentUser = await request.request.get(`api/users/${newUser.body.user.id}`);

      expect(currentUser.statusCode).eq(200);

      await request.request.delete(`api/users/${newUser.body.user.id}`);
    });
  });

  describe('Negative test', () => {
    it('should get error message when getting not existing user', async () => {
      const newUser = await request.request.get(`api/users/${test_data.newUserAssertion('notExistingUserId')}`);

      expect(newUser.statusCode).eq(404);
      expect(newUser.body).should.be.a('object');
      expect(newUser.body).to.have.property('status');
      expect(newUser.body.status).eq('No such user');
    });
  });
});
