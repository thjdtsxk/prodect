// ❤️ Wishlist Loader (from localStorage)
function loadWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const container = document.getElementById("wishlistItems");
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<p>😔 কোনো Wishlist পণ্য নেই</p>";
    return;
  }

  wishlist.forEach(title => {
    const item = document.createElement("li");
    item.textContent = title;
    container.appendChild(item);
  });
}

// 📦 Demo Order Data
const orders = [
  { id: "ORD1023", date: "২০২৫-০৬-১২", amount: 1250, status: "Delivered" },
  { id: "ORD1045", date: "২০২৫-০৭-০১", amount: 890, status: "Pending" },
];

// 🛍️ Render Order Table
function loadOrders() {
  const tbody = document.getElementById("orderTable");
  tbody.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.id}</td>
      <td>${order.date}</td>
      <td>৳${order.amount}</td>
      <td>${order.status}</td>
      <td><button onclick="viewOrder('${order.id}')">দেখুন</button></td>
    `;
    tbody.appendChild(row);
  });
}

// 🔎 View Order Detail (demo)
function viewOrder(id) {
  alert(`📦 অর্ডার ${id} বিস্তারিত (ডেমো)`);
}

// ✏️ Profile Edit (demo)
function editProfile() {
  alert("🛠️ প্রোফাইল এডিট ফর্ম (ডেমো)");
}

// 🔐 Change Password (demo)
function changePassword() {
  alert("🔑 পাসওয়ার্ড পরিবর্তনের পেইজে নিয়ে যাওয়া হবে");
}

// 🔒 Enable Two-Factor Auth (demo)
function enable2FA() {
  alert("🔐 Two-factor authentication চালু হচ্ছে... (ডেমো)");
}

// 🪄 Page Init
window.onload = () => {
  loadWishlist();
  loadOrders();
};
