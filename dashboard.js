// 📊 Demo KPI Values
const kpiData = {
  orders: 168,
  users: 1250,
  revenue: 48500
};

// 🔁 Render KPI
function renderKPI() {
  document.getElementById("ordersKpi").textContent = kpiData.orders;
  document.getElementById("usersKpi").textContent = kpiData.users;
  document.getElementById("revenueKpi").textContent = kpiData.revenue;
}

// 🔄 Refresh Logic (Demo)
function refreshDashboard() {
  alert("✅ ড্যাশবোর্ড আপডেট হয়েছে (ডেমো)");
  renderKPI();
}

// Future notification integration
function triggerAdminAlert(type, message) {
  console.log(`🔔 [${type}] ${message}`);
  // Future toast or modal system support
}

// 🧠 Init
window.onload = renderKPI;
