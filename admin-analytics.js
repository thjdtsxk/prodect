// 📈 Order Graph Data (Demo)
const orderData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Orders",
    data: [120, 150, 130, 170, 190, 220, 210],
    backgroundColor: "#1976d2"
  }]
};

// 🖼️ Render Chart
const ctx = document.getElementById("ordersChart");
new Chart(ctx, {
  type: "bar",
  data: orderData,
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "মাসিক অর্ডার সারাংশ"
      }
    }
  }
});

// 📦 KPI Numbers (Demo)
document.getElementById("ordersToday").textContent = "128";
document.getElementById("newUsers").textContent = "42";
document.getElementById("revenueToday").textContent = "34000";

// 🔄 Refresh Analytics
function refreshAnalytics() {
  alert("✅ অ্যানালিটিক্স রিফ্রেশ হয়েছে (ডেমো)");
}

// 📥 Export Report (Demo)
function exportReport() {
  alert("📁 রিপোর্ট এক্সপোর্ট হয়েছে (ডেমো CSV)");
}
