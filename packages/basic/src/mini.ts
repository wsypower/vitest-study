export class User {
  constructor(
    public name: string,
    public age: number,
    public email: string,
    public address: string,
  ) {
    this.name = name
    this.age = age
    this.email = email
    this.address = address
  }

  buy(product: Product) {
    return `User ${this.name} bought ${product.name}`
  }
}

export class Product {
  constructor(public name: any, public price: number, public description: any) {
    this.name = name
    this.price = price
    this.description = description
  }
}
