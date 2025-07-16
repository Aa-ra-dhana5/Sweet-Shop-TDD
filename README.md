#  Meethica - Sweet Shop Management System

A simple, clean, and test-driven **Sweet Shop Management System** built using **JavaScript** and **Jest**.  
Designed as part of a kata to practice **TDD (Test-Driven Development)** and clean software design principles.

🌐 **Live Demo**: [https://meethica.onrender.com](https://meethica.onrender.com)

---

## 🚀 Features

- ✅ Add new sweets with ID, name, category, price, and quantity
- ✅ View all available sweets
- ✅ Delete sweets by ID
- ✅ Search sweets by:
  - Name
  - Category
  - Price Range
- ✅ Sort sweets by name or price
- ✅ Purchase sweets (with stock validation)
- ✅ Restock sweets

---

## 🧪 Testing (Jest + TDD)

This project was developed using **Test-Driven Development (TDD)**.  
Each functionality was implemented only **after writing a failing test case**, following clean and modular code practices.

### 📁 Test File

| File                 | Description                                |
|----------------------|--------------------------------------------|
| `tests/shop.test.js` | Unit tests for the `SweetShop` class using Jest |

### 🔄 Tested Scenarios

- Adding sweets
- Deleting sweets (valid + invalid)
- Searching by name, category, and price range
- Sorting sweets by name and price
- Purchasing sweets (valid + insufficient stock)
- Restocking sweets

---


## 🛠 Tech Stack

### 💻 UI & Frontend

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **GSAP** – for scroll-based zoom and animation effects  

### 🧠 Logic & Testing

- **Node.js** – for backend testability  
- **Jest** – for unit testing  
- **TDD** – Test-Driven Development methodology  

### 🚀 Deployment

- **Git + GitHub** – for version control  
- **Render.com** – for live deployment  
  - 🌐 [https://meethica.onrender.com](https://meethica.onrender.com) 

---

## ⚙️ Setup & Run

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/Sweet-Shop-TDD.git
cd Sweet-Shop-TDD
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Tests
```bash
npm test
```





