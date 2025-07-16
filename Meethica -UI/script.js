// SweetShop class to manage sweets
class SweetShop {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    const exists = this.sweets.find(
      (s) => s.name.toLowerCase() === sweet.name.toLowerCase()
    );
    if (exists) throw new Error("Sweet already exists!");
    this.sweets.push(sweet);
  }

  getSweets() {
    return this.sweets;
  }

  searchByName(name) {
    return this.sweets.filter((s) =>
      s.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  filter({ name, category, sort }) {
    let filtered = [...this.sweets];

    if (name) {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((s) =>
        s.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (sort === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }
}

const shop = new SweetShop();

// DOM elements
const form = document.getElementById("sweet-form");
const searchInput = document.getElementById("search-input");
const filterName = document.getElementById("filter-name");
const filterCategory = document.getElementById("filter-category");
const sortPrice = document.getElementById("sort-price");
const sweetGrid = document.getElementById("sweet-grid");
const searchResults = document.getElementById("search-results");

// Handle Add Sweet
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value.trim();
  const category = form.category.value.trim();
  const price = parseFloat(form.price.value);
  const quantity = parseInt(form.quantity.value);
  const imageFile = form.image.files[0];

  if (!name || !category || !price || !quantity) {
    alert("Please fill all required fields.");
    return;
  }

  const sweet = {
    name,
    category,
    price,
    quantity,
    image: imageFile ? URL.createObjectURL(imageFile) : "image.png",
  };

  try {
    shop.addSweet(sweet);
    form.reset();
    renderSweets(shop.getSweets());
  } catch (err) {
    alert(err.message);
  }
});

// Render sweets
function renderSweets(sweets) {
  sweetGrid.innerHTML = generateSweetHTML(sweets);
}

// Generate sweet cards
function generateSweetHTML(sweets) {
  if (sweets.length === 0) return "<p>No sweets found.</p>";

  return sweets
    .map(
      (s) => `
    <div class="sweet-card">
      <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px;">
      <h4>${s.name}</h4>
      <p>Category: ${s.category}</p>
      <p>Price: ₹${s.price}</p>
      <p>Quantity: ${s.quantity}</p>
    </div>
  `
    )
    .join("");
}

// Handle search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  const result = shop.searchByName(query);
  searchResults.innerHTML = generateSweetHTML(result);
});

// Handle filters and sorting
[filterName, filterCategory, sortPrice].forEach((input) => {
  input.addEventListener("input", () => {
    const filtered = shop.filter({
      name: filterName.value.trim(),
      category: filterCategory.value.trim(),
      sort: sortPrice.value,
    });
    renderSweets(filtered);
  });
});

// GSAP animation for hero image
gsap.registerPlugin(ScrollTrigger);
const { innerHeight } = window;

gsap.from("#zoom-out .image", {
  scale: 2,
  duration: 2.5,
  scrollTrigger: {
    trigger: "#zoom-out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
  },
});
