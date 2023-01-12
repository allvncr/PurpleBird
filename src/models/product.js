
export default class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.urlimage = data.urlimage;
    this.imagesList = data.imagesList;
    this.price = data.price;
    this.reference = data.reference;
    this.description = data.description;
    this.colorList = data.colorList;
    this.markingList = data.markingList;
    this.created_at = data.created_at
  }
  update(data) {
    this.id = data.id;
    this.name = data.name;
    this.imagesList = data.imagesList;
    this.price = data.price;
    this.reference = data.reference;
    this.description = data.description;
    this.colorList = data.colorList;
    this.markingList = data.markingList;
  }

  static create(data) {
    return new Product(data);
  }
}
