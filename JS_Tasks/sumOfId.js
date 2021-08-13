function sumOfIds(users) {
    return users.reduce(
        (accumulator, currentValue) => accumulator + currentValue.id, 0
    );
}

let users = [{
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com',
    phoneNumber: '989898',
}, {
    id: 1,
    name: 'Kale',
    email: 'kale@gmail.com',
    phoneNumber: '24352345',
}, {
    id: 2,
    name: 'John',
    email: 'johnasd232@gmail.com',
    phoneNumber: '32473747234',
}, {
    id: 7,
    name: 'John',
    email: 'johnasd232@gmail.com',
    phoneNumber: '47348t28943'
}, {
    id: 10,
    name: 'John',
    email: 'johnasd232@gmail.com',
    phoneNumber: '47348t28943'
}];

console.log(sumOfIds(users));