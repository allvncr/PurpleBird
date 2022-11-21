import Categorie from "@/models/categorie";

export default class Product {
  constructor(data) {
    this.id = data._id;
    this.name = data.name;
    this.img = data.imagesList;
    this.category = Categorie.create(data.category);
    this.price = data.price;
    this.featured = data.featured;
    this.created_at = data.created_at;
  }
  update(data) {
    this.id = data._id;
    this.name = data.name;
    this.img = data.imagesList;
    this.category = Categorie.create(data.category);
    this.price = data.price;
    this.featured = data.featured;
    this.created_at = data.created_at;
  }

  static create(data) {
    return new Product(data);
  }
}
