class User {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  getUserData() {
    return `${this.name} from ${this.country} wit age ${this.age}`;
  }
}

const user = new User('John', 32, 'USA');
console.log(user.getUserData());
console.log(`User name is ${user.name}`);
console.log(`User age is ${user.age}`);
console.log(`User country is ${user.country}`);
