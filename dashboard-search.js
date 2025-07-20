document.getElementById("dashboardSearch")?.addEventListener("input", function (e) {
  const query = e.target.value.trim().toLowerCase();
  const blocks = document.querySelectorAll(".kpi-box");

  blocks.forEach(block => {
    const text = block.textContent.toLowerCase();
    block.style.display = text.includes(query) ? "" : "none";
  });
});
