// 🧑‍💼 Sample User Data
const users = [
  { name: "রাফায়েত", email: "rafayet@example.com", role: "Buyer" },
  { name: "নুসরাত", email: "nusrat@example.com", role: "Buyer" },
  { name: "আব্দুল্লাহ", email: "admin@fashionfusion.com", role: "Admin" }
];

// 🔁 Render User Table
function renderUsers() {
  const tbody = document.getElementById("userTable");
  tbody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="নাম">${user.name}</td>
      <td data-label="ইমেইল">${user.email}</td>
      <td data-label="রোল">${user.role}</td>
      <td data-label="অ্যাকশন">
        <button onclick="deleteUser(${index})">❌</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// ❌ Delete User
function deleteUser(index) {
  if (confirm("আপনি কি সত্যিই এই ইউজারটি মুছে ফেলতে চান?")) {
    const removed = users.splice(index, 1)[0];
    alert(`✅ ইউজার "${removed.name}" সফলভাবে মুছে ফেলা হয়েছে`);
    renderUsers();
  }
}

// 🚀 Init
window.onload = renderUsers;
