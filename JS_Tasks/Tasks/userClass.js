class HashMap {
  constructor() {
    this.DEFAULT_CAPACITY = 16;
    this.THRESHOLD = 0.75;

    this.capacity = this.DEFAULT_CAPACITY;
    this.RANGE = this.capacity * this.THRESHOLD;
    this.data = new Array(this.capacity);
    this.w = [];
    this.size = 0;
  }

  resize() {
    const dataBefore = this.entries();

    this.capacity *= 2;
    this.RANGE = this.capacity * this.THRESHOLD;
    this.data = new Array(this.capacity);

    for (let i = 0; i < dataBefore.length; i++) {
      this.set(dataBefore[i][0], dataBefore[i][1]);
    }
  }

  set(key, value) {
    this.data[key] = value;
    this.size++;
    this.w.push(key);

    if (this.size >= this.RANGE) {
      this.size = 0;
      this.resize();
      this.data.splice(key, 0, value);
    }
  }

  get(key) {
    if (!this.data[key]) {
      return null;
    }

    if (this.data[key] === []) {
      return null;
    }

    return this.data[key];
  }

  clear() {
    for (let i = 0; i < this.data.length; i++) {
      this.data[this.w[i]] = null;
    }

    this.size = 0;
  }

  keys() {
    return this.w;
  }

  values() {
    const array = [];

    for (let i = 0; i < this.capacity; i++) {
      if (this.data[this.w[i]] || this.data[this.w[i]] === 0) {
        array.push(this.data[this.w[i]]);
      }
    }

    return array;
  }

  entries() {
    const array = [];

    for (let i = 0; i < this.capacity; i++) {
      if (this.data[this.w[i]] || this.data[this.w[i]] === 0) {
        array.push([`${this.w[i]}`, this.data[this.w[i]]]);
      }
    }

    return array.sort((a, b) => a - b);
  }
}

module.exports = {HashMap};