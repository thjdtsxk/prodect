// 📦 Initial Cart Load from LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔁 Save cart every time updated
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// 📦 Render Cart Items
function renderCart() {
  const tbody = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("emptyCartMessage");
  tbody.innerHTML = "";

  if (cart.length === 0) {
    emptyMsg.style.display = "block";
    document.querySelector(".cart-summary").style.display = "none";
    return;
  } else {
    emptyMsg.style.display = "none";
    document.querySelector(".cart-summary").style.display = "block";
  }

  cart.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.title}" /><br>${item.title}</td>
      <td>${item.size}</td>
      <td>
        <input type="number" min="1" value="${item.qty}" 
               onchange="updateQty(${index}, this.value)" />
      </td>
      <td>৳${item.price}</td>
      <td>৳${item.qty * item.price}</td>
      <td>
        <button class="remove-btn" onclick="confirmRemove(${index})">❌</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  updateSummary();
}

// 🔁 Quantity Update
function updateQty(index, newQty) {
  cart[index].qty = parseInt(newQty);
  saveCart();
  renderCart();
  showToast("পরিমাণ আপডেট ✅");
}

// ❌ Remove With Confirmation
function confirmRemove(index) {
  const title = cart[index].title;
  if (confirm(`"${title}" বাদ দিতে চান?`)) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    showToast("আইটেম মুছে ফেলা হয়েছে 🗑️");
  }
}

// 💰 Update Cart Summary
function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const vat = Math.round(subtotal * 0.05);
  let discount = getCouponDiscount(subtotal);
  const grandTotal = subtotal + vat - discount;

  document.getElementById("totalItems").textContent = cart.length;
  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("vat").textContent = vat;
  document.getElementById("grandTotal").textContent = grandTotal;
}

// 🧾 Coupon Logic
function getCouponDiscount(subtotal) {
  const applied = localStorage.getItem("couponCode");
  const coupons = { BD50: 50, SAVE10: 10 }; // Flat values
  if (applied && coupons[applied]) {
    return coupons[applied];
  }
  return 0;
}

function applyCoupon(code) {
  const validCoupons = { BD50: 50, SAVE10: 10 };
  if (validCoupons[code]) {
    localStorage.setItem("couponCode", code);
    renderCart();
    showToast(`"${code}" কুপন প্রয়োগ ✅`);
  } else {
    showToast("❌ অবৈধ কুপন");
  }
}

// ✅ Toast Message Utility
function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// 🛍️ Checkout Logic
function checkout() {
  const grand = document.getElementById("grandTotal").textContent;
  alert(`✅ মোট ৳${grand} দিয়ে চেকআউট সফল!`);
  cart = [];
  localStorage.removeItem("cart");
  localStorage.removeItem("couponCode");
  renderCart();
}

// 🚀 On Page Load
window.onload = () => renderCart();
