const fs = require('fs');
const request = require('../commonTests');

let userID;
let newUserAssertion;

describe('POST request', () => {
  try {
    beforeEach(() => {
      console.log('Input user details!');
      newUserAssertion = {
        name: 'IntNum1',
        age: 23,
        additional_info: 'qwerty123',
      };
    });

    afterEach(() => {
      console.log('User is created with ID : ', userID);
    });

	  it('Create user data', async () => {
      const newUser = await request.request
        .post('api/users')
        .send(newUserAssertion);

      expect(newUser.statusCode).toBe(201);
      expect(newUser.body).toHaveProperty('user');
      expect(newUser.body).toHaveProperty('status');

      await request.request.delete(`api/users/${newUser.body.user.id}`);

      userID = newUser.body.id;

      const jsonContent = JSON.stringify({ user: newUser.body });
      fs.writeFile('data.json', jsonContent, 'utf8', (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('POST response body : ', newUser.body);
      });
    });
  } catch (err) {
    console.log('Exception : ', err);
  }
});

describe('GET all user details', () => {
  try {
    beforeEach(() => {
      console.log('GET all users details ');
    });

    afterEach(() => {
      console.log("All users' details are retrieved");
    });

    it('GET user output', async () => {
      await request.request.post('api/users').send(newUserAssertion);

      const userList = await request.request.get('api/users');

      expect(userList.statusCode).toBe(200);
      userList.body.reverse();
      expect(userList.body[0].name).toMatch(newUserAssertion.name);
      expect(userList.body[0].age).toBe(newUserAssertion.age);
      expect(userList.body[0].additional_info).toMatch(
        newUserAssertion.additional_info,
      );

      await request.request.delete(`api/users/${userList.body[0].id}`);
    });
  } catch (err) {
    console.log('Exception : ', err);
  }
});
