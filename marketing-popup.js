// 🎯 Show Marketing Popup (demo)
function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "marketing-popup";
  popup.innerHTML = `
    <strong>🎁 অফার:</strong> ${message}
    <button onclick="popup.remove()">❌ বন্ধ করুন</button>
  `;
  document.body.appendChild(popup);
}

// 💡 Example Trigger
window.onload = () => {
  setTimeout(() => showPopup("আজকের জন্য ২০% ছাড়!"), 1000);
};
