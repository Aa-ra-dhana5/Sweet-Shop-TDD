class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    const exists = this.sweets.find(s => s.id === sweet.id);
    if (exists) throw new Error("Sweet with this ID already exists");
    this.sweets.push(sweet);
  }

  getSweets() {
    return this.sweets;
  }
  
  deleteSweet(id) {
  const index = this.sweets.findIndex(s => s.id === id);
  if (index === -1) throw new Error('Sweet not found');
  this.sweets.splice(index, 1);
  }
  
  searchSweets({ name, category, minPrice, maxPrice }) {
  return this.sweets.filter(sweet => {
    return (
      (!name || sweet.name.includes(name)) &&
      (!category || sweet.category === category) &&
      (!minPrice || sweet.price >= minPrice) &&
      (!maxPrice || sweet.price <= maxPrice)
    );
  });
  }
  sortSweets(by) {
  const sorted = [...this.sweets];
  if (by === 'price') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (by === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}

purchaseSweet(id, qty) {
  const sweet = this.sweets.find(s => s.id === id);
  if (!sweet) throw new Error('Sweet not found');
  if (sweet.quantity < qty) throw new Error('Insufficient stock');
  sweet.quantity -= qty;
}

restockSweet(id, qty) {
  const sweet = this.sweets.find(s => s.id === id);
  if (!sweet) throw new Error('Sweet not found');
  sweet.quantity += qty;
}


  


}

module.exports = SweetShop;
