export default class Category {
  constructor(data) {
    this.id = data._id;
    this.lib = data.name;
    // this.img = data.imageStoreLocation;
  }
  update(data) {
    this.id = data._id;
    this.lib = data.name;
    // this.img = data.imageStoreLocation;
  }

  static create(data) {
    return new Category(data);
  }
}
