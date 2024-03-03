export class LocalStorage {
  constructor(key, value) {
    this.key = key;

    if (localStorage.getItem(this.key) === null) {
      localStorage.setItem(this.key, value);
    }
  }

  get() {
    return localStorage.getItem(this.key);
  }

  set(value) {
    localStorage.setItem(this.key, value);
  }
}