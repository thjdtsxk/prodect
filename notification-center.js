const notifications = [
  {
    type: "Order",
    message: "আপনার অর্ডার #FF20250790 সফলভাবে প্রক্রিয়াধীন।",
    time: "১ ঘণ্টা আগে"
  },
  {
    type: "Offer",
    message: "🔥 আজকের ফ্ল্যাশ সেলে পাচ্ছেন ৩০% ছাড়!",
    time: "২ ঘণ্টা আগে"
  },
  {
    type: "Security",
    message: "আপনার অ্যাকাউন্টে নতুন লগইন সেশন সনাক্ত করা হয়েছে।",
    time: "৬ ঘণ্টা আগে"
  }
];

// Render Notifications
function renderNotifications() {
  const list = document.getElementById("notificationList");
  list.innerHTML = "";

  notifications.forEach((n, index) => {
    const item = document.createElement("div");
    item.className = "notif-item";
    item.innerHTML = `
      <strong>${n.type}:</strong> ${n.message} <br />
      <span class="notif-time">🕓 ${n.time}</span>
      <button onclick="dismissNotif(${index})">❌</button>
    `;
    list.appendChild(item);
  });
}

// Dismiss Single Notification
function dismissNotif(index) {
  notifications.splice(index, 1);
  renderNotifications();
}

// Init
window.onload = renderNotifications;
