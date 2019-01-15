// LocalStorage wrapper for eventually change it to something with more
// performance


class Storage {
  constructor() {
    const service = localStorage;
    const key = "shopcart"; // Maybe this needs something random

    this.service = service;
    this.key = key;
  }

  hasElements = (key = this.key) => {
    return Boolean(this.service.getItem(key));
  }

  set = (data) => {
    this.service.setItem(
      this.key,
      JSON.stringify(data)
    );
  }

  get = (key = this.key) => {
    return JSON.parse(this.service.getItem(key));
  }
}

export default new Storage();
