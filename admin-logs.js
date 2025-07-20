// 🧠 Sample Log Data
const logs = [
  { type: "Login", message: "রাফায়েত লগইন করেছেন", time: "১০:২২ AM" },
  { type: "Delete", message: "Admin ইউজার #007 ডিলিট করেছেন", time: "১০:৩০ AM" },
  { type: "Payment", message: "নুসরাতের অর্ডার ৳১২০০ পেমেন্ট হয়েছে", time: "১১:০৫ AM" }
];

// 🔁 Render Logs
function renderLogs() {
  const list = document.getElementById("logList");
  list.innerHTML = "";

  logs.forEach((log, index) => {
    const item = document.createElement("div");
    item.className = `log-item log-${log.type.toLowerCase()}`;
    item.innerHTML = `
      <strong>${log.type}:</strong> ${log.message} <br />
      <span class="log-time">🕓 ${log.time}</span>
    `;
    list.appendChild(item);
  });
}

// 🔄 Refresh Logs (Demo)
function refreshLogs() {
  alert("🔄 লগ রিফ্রেশ করা হয়েছে (ডেমো)");
  renderLogs();
}

// 🚀 Init
window.onload = renderLogs;
