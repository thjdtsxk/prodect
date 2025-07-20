// 🛒 Sample Cart Items (can be dynamic)
const cartItems = [
  { title: "Cotton Shirt", qty: 2, price: 550 },
  { title: "Stylish Kurti", qty: 1, price: 890 },
];

function loadSummary() {
  const container = document.getElementById("summaryItems");
  container.innerHTML = "";

  let subtotal = 0;
  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.qty} × ${item.title} = ৳${item.qty * item.price}`;
    container.appendChild(div);
    subtotal += item.qty * item.price;
  });

  const area = document.getElementById("area")?.value;
  const deliveryFee = (area === "Dhaka") ? 60 : 100;
  const grandTotal = subtotal + deliveryFee;

  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("deliveryFee").textContent = deliveryFee;
  document.getElementById("grandTotal").textContent = grandTotal;
}

// ✅ Confirm Order
function confirmOrder() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const area = document.getElementById("area").value;

  if (name.length < 2 || phone.length < 10 || address.length < 5 || area === "") {
    alert("⚠️ সকল ডেলিভারি তথ্য সঠিকভাবে পূরণ করুন");
    return;
  }

  const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value;
  const grandTotal = document.getElementById("grandTotal").textContent;

  alert(`✅ অর্ডার সফলভাবে সম্পন্ন হয়েছে!\nমোট: ৳${grandTotal}\nপেমেন্ট: ${payMethod}\nধন্যবাদ, ${name}!`);

  // Future: API call + redirect
}

// 🔁 Area Change triggers summary update
document.getElementById("area")?.addEventListener("change", loadSummary);

// 🪄 Page Init
window.onload = loadSummary;
