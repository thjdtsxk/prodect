// 🌍 Language Switch Trigger
document.getElementById("languageSelect")?.addEventListener("change", function () {
  const lang = this.value;
  switchLanguage(lang); // from lang.js
});

// 💌 Newsletter Subscribe Validation
document.getElementById("subscribeBtn")?.addEventListener("click", () => {
  const emailInput = document.querySelector(".newsletter input");
  const email = emailInput.value;
  if (email.includes("@") && email.length >= 6) {
    alert("✅ সফলভাবে সাবস্ক্রাইব করা হয়েছে!");
    emailInput.value = "";
  } else {
    alert("⚠️ সঠিক ইমেইল দিন");
  }
});

// 🔁 Trending Scroll Auto
let scrollContainer = document.querySelector(".product-scroll");
setInterval(() => {
  if (scrollContainer) {
    scrollContainer.scrollLeft += 160;
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth) {
      scrollContainer.scrollLeft = 0;
    }
  }
}, 4000);

// ✨ Promo Hover Effect
document.querySelectorAll(".highlight-item").forEach(item => {
  item.addEventListener("mouseenter", () => item.classList.add("hovered"));
  item.addEventListener("mouseleave", () => item.classList.remove("hovered"));
});

// 🧠 Scroll Reveal on Category
window.addEventListener("scroll", () => {
  const grid = document.querySelector(".category-grid");
  if (window.scrollY > 100) {
    grid.classList.add("visible");
  }
});
