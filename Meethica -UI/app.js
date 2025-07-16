import SweetShop from './shop.js';

const shop = new SweetShop();
const form = document.getElementById('sweet-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const sweetGrid = document.getElementById('sweet-grid');
const filterName = document.getElementById('filter-name');
const filterCategory = document.getElementById('filter-category');
const sortPrice = document.getElementById('sort-price');

function renderSweets(sweets) {
  sweetGrid.innerHTML = '';
  sweets.forEach((s) => {
    const card = document.createElement('div');
    card.className = 'sweet-card';
    card.innerHTML = `
      <h3>${s.name}</h3>
      <p>Category: ${s.category}</p>
      <p>Price: ₹${s.price}</p>
    `;
    sweetGrid.appendChild(card);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const [name, category, priceInput] = form.querySelectorAll('input[type=text], input[type=number]');
  const price = parseFloat(priceInput.value);

  try {
    shop.addSweet({ name: name.value, category: category.value, price });
    renderSweets(shop.getSweets());
    form.reset();
  } catch (err) {
    alert(err.message);
  }
});

searchInput.addEventListener('input', () => {
  const result = shop.searchSweets(searchInput.value);
  searchResults.innerHTML = result.map((s) => `<p>${s.name}</p>`).join('');
});

[filterName, filterCategory, sortPrice].forEach((el) =>
  el.addEventListener('input', () => {
    let sweets = shop.getSweets();

    if (filterName.value) {
      sweets = sweets.filter((s) =>
        s.name.toLowerCase().includes(filterName.value.toLowerCase())
      );
    }
    sweets = shop.filterByCategory(filterCategory.value);
    if (sortPrice.value) {
      sweets = shop.sortByPrice(sortPrice.value);
    }

    renderSweets(sweets);
  })
);