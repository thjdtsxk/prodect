const items = [
  { title: "Cotton Shirt", qty: 2, price: 550 },
  { title: "Stylish Kurti", qty: 1, price: 890 },
];

function renderInvoice() {
  const tbody = document.getElementById("orderItems");
  let subtotal = 0;

  items.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.qty}</td>
      <td>৳${item.price}</td>
      <td>৳${item.qty * item.price}</td>
    `;
    tbody.appendChild(row);
    subtotal += item.qty * item.price;
  });

  const deliveryFee = 60;
  const grandTotal = subtotal + deliveryFee;

  document.getElementById("subtotal").textContent = subtotal;
  document.getElementById("deliveryFee").textContent = deliveryFee;
  document.getElementById("grandTotal").textContent = grandTotal;
}

// 🪄 Init
window.onload = renderInvoice;
