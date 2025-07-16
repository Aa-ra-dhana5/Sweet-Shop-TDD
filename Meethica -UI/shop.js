export default class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    const exists = this.sweets.find((s) => s.name === sweet.name);
    if (exists) throw new Error("Sweet with this name already exists");
    this.sweets.push(sweet);
  }

  getSweets() {
    return this.sweets;
  }

  searchSweets(name) {
    return this.sweets.filter((s) =>
      s.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  filterByCategory(category) {
    return category
      ? this.sweets.filter((s) => s.category === category)
      : this.sweets;
  }

  sortByPrice(order = "asc") {
    return [...this.sweets].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
  }
}