// 🔍 Search Listener
document.getElementById("userSearch")?.addEventListener("input", function (e) {
  const query = e.target.value.trim().toLowerCase();
  const rows = document.querySelectorAll("#userTable tr");

  rows.forEach(row => {
    const name = row.querySelector("td[data-label='নাম']")?.textContent.toLowerCase() || "";
    const email = row.querySelector("td[data-label='ইমেইল']")?.textContent.toLowerCase() || "";

    if (name.includes(query) || email.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
