function arrayOfUserIdByMap(users) {
  return users.map((user) => user.id);
}

function arrayOfUserIdByForEach(users) {
  const arrayOfUserId = [];

  users.forEach((user) => arrayOfUserId.push(user.id));

  return arrayOfUserId;
}

const users = [{
  id: 0,
  name: 'Bob',
  email: 'bob@gmail.com',
  phoneNumber: '989898',
}, {
  id: 2,
  name: 'Kale',
  email: 'kale@gmail.com',
  phoneNumber: '24352345',
}, {
  id: 908,
  name: 'John',
  email: 'johnasd232@gmail.com',
  phoneNumber: '32473747234',
}, {
  id: 12312312,
  name: 'John',
  email: 'johnasd232@gmail.com',
  phoneNumber: '47348t28943',
}, {
  id: 249,
  name: 'John',
  email: 'johnasd232@gmail.com',
  phoneNumber: '47348t28943',
}];

console.log(arrayOfUserIdByMap(users));
console.log(arrayOfUserIdByForEach(users));
