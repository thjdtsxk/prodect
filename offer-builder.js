document.getElementById("offerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  const offer = {
    title: data.get("offerTitle"),
    desc: data.get("offerDesc"),
    code: data.get("couponCode"),
    discount: data.get("discountPercent"),
    start: data.get("startDate"),
    end: data.get("endDate"),
    active: data.get("isActive") === "on"
  };

  console.log("📦 নতুন অফার যুক্ত হয়েছে:", offer);
  alert("✅ অফার সফলভাবে সংরক্ষণ হয়েছে (ডেমো)");
});
