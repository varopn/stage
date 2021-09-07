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

const user = new User('John', 13, 'Hik');
console.log(user.getUserData());
user.age = 14;
console.log(user.getUserData());
