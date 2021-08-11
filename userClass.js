class User {
    constructor(name,age,country) {
        this._name = name;
        this._age = age;
        this._country = country
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

    getUserData(){
        return `${this._name} from ${this._country} wit age ${this._age}`;
    }
};