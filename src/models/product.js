import Categorie from "@/models/categorie";

export default class Product {
  constructor(data) {
    this.id = data._id;
    this.name = data.name;
    this.img =
      "https://images.unsplash.com/photo-1666025958150-f22e446d8334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    this.category = Categorie.create(data.category);
    this.price = data.price;
    this.featured = data.featured;
    this.created_at = data.created_at;
  }
  update(data) {
    this.id = data._id;
    this.name = data.name;
    this.img =
      "https://images.unsplash.com/photo-1666025958150-f22e446d8334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    this.category = Categorie.create(data.category);
    this.price = data.price;
    this.featured = data.featured;
    this.created_at = data.created_at;
  }

  static create(data) {
    return new Product(data);
  }
}
