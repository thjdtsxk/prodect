// ✅ Sample Order Data
const orders = {
  "FF20250723": {
    customer: "রাফায়েত",
    status: "Delivered",
    estimated: "২০২৫-০৭-২৫",
    items: ["Cotton Shirt ×2", "Stylish Kurti ×1"]
  },
  "FF20250790": {
    customer: "নুসরাত",
    status: "Shipped",
    estimated: "২০২৫-০৭-২৭",
    items: ["Premium Hijab ×3"]
  }
};

// 🎯 Status Class Map
const statusClass = {
  Processing: "processing",
  Shipped: "shipped",
  Delivered: "delivered"
};

// 🔍 Track Order
function trackOrder() {
  const id = document.getElementById("orderIdInput").value.trim();
  const section = document.getElementById("statusSection");
  section.innerHTML = "";

  if (!orders[id]) {
    section.innerHTML = `<p>❌ অর্ডার "${id}" পাওয়া যায়নি</p>`;
    return;
  }

  const order = orders[id];
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>অর্ডার স্ট্যাটাস: <span class="${statusClass[order.status]}">${order.status}</span></h3>
    <p>👤 ক্রেতা: ${order.customer}</p>
    <p>📦 পণ্য: ${order.items.join(", ")}</p>
    <p>🕓 অনুমানিত ডেলিভারি: ${order.estimated}</p>
    <p>🔗 <a href="support.html">সহায়তা চাই?</a></p>
  `;
  section.appendChild(div);
}

// 🪄 Page Init
window.onload = () => {
  document.getElementById("orderIdInput")?.focus();
};
