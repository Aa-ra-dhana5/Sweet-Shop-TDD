const SweetShop = require("../src/shop");

describe("SweetShop", () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });

  //add food

  test("should add a sweet to the shop", () => {
    const sweet = {
      id: 1001,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };

    shop.addSweet(sweet);
    expect(shop.getSweets()).toContainEqual(sweet);
  });

  //delete Food
  test("should delete a sweet by ID", () => {
    const sweet = {
      id: 1,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    };
    shop.addSweet(sweet);
    shop.deleteSweet(1);
    expect(shop.getSweets()).toHaveLength(0);
  });

  test("should throw an error if sweet to delete does not exist", () => {
    expect(() => shop.deleteSweet(999)).toThrow("Sweet not found");
  });

  //search food

  test("should search sweets by name", () => {
    shop.addSweet({
      id: 1,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: 2,
      name: "Ladoo",
      category: "Milk-Based",
      price: 30,
      quantity: 10,
    });

    const result = shop.searchSweets({ name: "Ladoo" });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Ladoo");
  });

  test("should search sweets by category", () => {
    shop.addSweet({
      id: 1,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: 2,
      name: "Ladoo",
      category: "Milk-Based",
      price: 30,
      quantity: 10,
    });

    const result = shop.searchSweets({ category: "Milk-Based" });
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe("Milk-Based");
  });

  test("should search sweets within price range", () => {
    shop.addSweet({
      id: 1,
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    shop.addSweet({
      id: 2,
      name: "Ladoo",
      category: "Milk-Based",
      price: 30,
      quantity: 10,
    });

    const result = shop.searchSweets({ minPrice: 20, maxPrice: 40 });
    expect(result).toHaveLength(1);
    expect(result[0].price).toBe(30);
  });

  //Sort Sweet
  test("should sort sweets by price", () => {
    shop.addSweet({
      id: 1,
      name: "Ladoo",
      category: "Milk",
      price: 40,
      quantity: 10,
    });
    shop.addSweet({
      id: 2,
      name: "Barfi",
      category: "Milk",
      price: 20,
      quantity: 15,
    });

    const result = shop.sortSweets("price");
    expect(result[0].price).toBe(20);
  });

  test("should sort sweets by name", () => {
    shop.addSweet({
      id: 1,
      name: "Ladoo",
      category: "Milk",
      price: 40,
      quantity: 10,
    });
    shop.addSweet({
      id: 2,
      name: "Barfi",
      category: "Milk",
      price: 20,
      quantity: 15,
    });

    const result = shop.sortSweets("name");
    expect(result[0].name).toBe("Barfi");
  });

  //purchase Sweet
  test("should reduce quantity on purchase", () => {
    shop.addSweet({
      id: 1,
      name: "Ladoo",
      category: "Milk",
      price: 40,
      quantity: 10,
    });
    shop.purchaseSweet(1, 3);
    expect(shop.getSweets()[0].quantity).toBe(7);
  });

  test("should throw error if stock is insufficient", () => {
    shop.addSweet({
      id: 1,
      name: "Ladoo",
      category: "Milk",
      price: 40,
      quantity: 5,
    });
    expect(() => shop.purchaseSweet(1, 10)).toThrow("Insufficient stock");
  });

  //restock sweet
  test("should increase quantity on restock", () => {
    shop.addSweet({
      id: 1,
      name: "Ladoo",
      category: "Milk",
      price: 40,
      quantity: 10,
    });
    shop.restockSweet(1, 5);
    expect(shop.getSweets()[0].quantity).toBe(15);
  });
});
