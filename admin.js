// 📦 Sample Orders
const orders = [
  { id: "ORD101", user: "রাফায়েত", amount: 650, status: "Delivered" },
  { id: "ORD102", user: "নুসরাত", amount: 890, status: "Pending" },
];

// 👥 Sample Users
const users = [
  { name: "রাফায়েত", email: "rafi@example.com", role: "Buyer" },
  { name: "নুসরাত", email: "nusrat@example.com", role: "Vendor" },
];

// 🛍️ Sample Products
const products = [
  { title: "সাদা শার্ট", price: 550 },
  { title: "সালোয়ার কামিজ", price: 890 },
];

// 📄 Sample Reports
const reports = ["অর্ডার বিলম্ব", "পণ্যের গুণমান", "লগইন সমস্যা"];

// 🔁 Load Orders
function loadOrders() {
  const tbody = document.getElementById("orderList");
  orders.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.user}</td>
      <td>৳${order.amount}</td>
      <td>${order.status}</td>
      <td><button onclick="updateOrder('${order.id}')">✔️</button></td>
    `;
    tbody.appendChild(row);
  });
}

// 👥 Load Users
function loadUsers() {
  const container = document.getElementById("userList");
  users.forEach(u => {
    const div = document.createElement("div");
    div.innerHTML = `<h4>${u.name}</h4><p>${u.email}</p><p>রোল: ${u.role}</p>`;
    container.appendChild(div);
  });
}

// 🛍️ Load Products
function loadProducts() {
  const grid = document.getElementById("productGrid");
  products.forEach(p => {
    const item = document.createElement("div");
    item.innerHTML = `<h4>${p.title}</h4><p>৳${p.price}</p>`;
    grid.appendChild(item);
  });
}

// ➕ Add Product (demo)
function addProduct() {
  alert("➕ নতুন পণ্য যোগ করার ফর্ম আসবে (ডেমো)");
}

// 📄 Load Reports
function loadReports() {
  const ul = document.getElementById("reportList");
  reports.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ul.appendChild(li);
  });
}

// 🔁 Update Order (demo)
function updateOrder(id) {
  alert(`✅ অর্ডার ${id} সফলভাবে আপডেট হয়েছে`);
}

// 🌙 Dark Mode Toggle
document.getElementById("darkModeToggle")?.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

// 🪄 Init Dashboard
window.onload = () => {
  loadOrders();
  loadUsers();
  loadProducts();
  loadReports();
};
