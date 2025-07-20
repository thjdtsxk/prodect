const systemStatus = {
  api: true,
  db: true,
  cache: false
};

function checkSystemHealth() {
  const results = Object.entries(systemStatus).map(([key, val]) =>
    `${key.toUpperCase()}: ${val ? "✅ OK" : "❌ DOWN"}`
  );
  alert("🖥️ Site Health:\n" + results.join("\n"));
}

window.onload = checkSystemHealth;
