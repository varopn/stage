class User {
  constructor(name, age, country) {
    this._name = name;
    this._age = age;
    this._country = country;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get country() {
    return this._country;
  }

  set name(name) {
    this._name = name;
  }

  set country(country) {
    this._country = country;
  }

  set age(age) {
    this._age = age + 1;
  }

  getUserData () {
    return `${this._name} from ${this._country} wit age ${this._age}`;
  }
}

const user = new User('John', 13, 'Hik');
console.log(user.getUserData());
user.age = 14;
console.log(user.getUserData());
