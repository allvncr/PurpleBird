export default class Pays {
    constructor(data) {
      this.name = data.translations.fra.common;
    }

    static create(data) {
      return new Pays(data);
    }
  }
