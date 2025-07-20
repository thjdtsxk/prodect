const products = [
  { title: "Cotton Shirt", price: 550 },
  { title: "Stylish Kurti", price: 750 },
];

const orders = [
  { id: "VD001", product: "Cotton Shirt", qty: 2, status: "Delivered" },
  { id: "VD002", product: "Kurti", qty: 1, status: "Pending" },
];

// 🧺 Render Products
function renderProducts() {
  const grid = document.getElementById("productList");
  grid.innerHTML = "";

  products.forEach((p, i) => {
    const item = document.createElement("div");
    item.innerHTML = `
      <h4>${p.title}</h4>
      <p>৳${p.price}</p>
      <button onclick="editProduct(${i})">✏️ এডিট</button>
    `;
    grid.appendChild(item);
  });
}

// 📦 Render Orders
function renderOrders() {
  const tbody = document.getElementById("vendorOrderList");
  tbody.innerHTML = "";

  orders.forEach((o, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${o.id}</td>
      <td>${o.product}</td>
      <td>${o.qty}</td>
      <td>${o.status}</td>
      <td><button onclick="updateOrderStatus(${i})">✔️</button></td>
    `;
    tbody.appendChild(row);
  });
}

// ➕ Add Product
function openProductForm() {
  alert("➕ নতুন পণ্য যোগ করার ফর্ম আসবে (ডেমো)");
}

// ✏️ Edit Product
function editProduct(index) {
  alert(`✏️ ${products[index].title} এডিট করতে পারবেন (ডেমো)`);
}

// 📦 Update Order
function updateOrderStatus(index) {
  orders[index].status = "Delivered";
  renderOrders();
  alert(`✅ অর্ডার ${orders[index].id} Delivered করা হয়েছে`);
}

// 💳 Withdrawal Request
function requestWithdrawal() {
  alert("💳 Withdrawal রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!");
}

// ✏️ Edit Vendor Profile
function editVendorProfile() {
  alert("🛠️ Vendor প্রোফাইল এডিট ফর্ম আসবে (ডেমো)");
}

// 🚀 Init Dashboard
window.onload = () => {
  renderProducts();
  renderOrders();
};
