document.getElementById("reportSearch")?.addEventListener("input", function (e) {
  const query = e.target.value.trim().toLowerCase();
  const rows = document.querySelectorAll(".report-row");

  rows.forEach(row => {
    const orderInfo = row.textContent.toLowerCase();
    if (orderInfo.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});
