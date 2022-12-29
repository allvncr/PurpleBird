
export default class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.urlimages = data.urlimages;
    this.price = data.price;
    this.reference = data.reference;
    this.description = data.description;
    this.colorList = data.colorList;
  }
  update(data) {
    this.id = data.id;
    this.name = data.name;
    this.urlimages = data.urlimages;
    this.price = data.price;
    this.reference = data.reference;
    this.description = data.description;
    this.colorList = data.colorList;
  }

  static create(data) {
    return new Product(data);
  }
}
