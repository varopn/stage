const faker = require('faker');

class UserAssertion {
    newUserAssertion(type = "full", arg = 0) {
        const name = faker.name.firstName();
        const age = faker.datatype.number({
          min: 0,
          max: 100,
        });
        const additional_info = faker.internet.email();

        if(type === "full") {
          return {
            name: name,
            age: age,
            additional_info: additional_info
          }
        }

        if(type === "empty") {
            return {};
        }

        if(type === "notFully") {
            if(arg === 1) {
                return {name : name}
            }

            if(arg === 2) {
                return {name : name, age: age}
            }

            if(arg === 3) {
                return {name : name, additional_info: additional_info}
            }
        }

        if(type === "notExistingUserId") {
            return 1;
        }
    }
}

module.exports = {
    UserAssertion
}