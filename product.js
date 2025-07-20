// 📸 Thumbnail Image Switch
function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

// 🛒 Add to Cart Logic (Demo)
function addToCart() {
  const title = document.getElementById("productTitle").textContent;
  const size = document.getElementById("sizeSelect").value;
  const qty = document.getElementById("qtyInput").value;

  alert(`${qty}টি ${size} সাইজের "${title}" কার্টে যোগ করা হয়েছে ✅`);
}

// ❤️ Add to Wishlist Logic
function addToWishlist() {
  const title = document.getElementById("productTitle").textContent;
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (!wishlist.includes(title)) {
    wishlist.push(title);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`"${title}" Wishlist-এ যোগ হয়েছে ❤️`);
  } else {
    alert("এই পণ্য আগেই Wishlist-এ রয়েছে 🛑");
  }
}

// ✍️ Add Review (Demo Function)
function addReview() {
  const name = prompt("আপনার নাম লিখুন:");
  const review = prompt("আপনার মন্তব্য লিখুন:");
  const rating = prompt("রেটিং দিন (১-৫):");

  const container = document.querySelector(".review-list");
  const newReview = document.createElement("div");
  newReview.className = "review-item";
  newReview.innerHTML = `
    <strong>${name}</strong>
    <p>${review}</p>
    <p>⭐ ${rating}/5</p>
  `;
  container.appendChild(newReview);
}
// ⭐ Rating Hover (ডেমো)
const ratingStars = document.querySelectorAll(".rating-star");
ratingStars.forEach((star, index) => {
  star.addEventListener("mouseover", () => highlightStars(index));
  star.addEventListener("click", () => setRating(index + 1));
});

function highlightStars(upto) {
  ratingStars.forEach((s, i) => {
    s.style.color = i <= upto ? "#ffa000" : "#ccc";
  });
}

function setRating(value) {
  alert(`আপনি ${value} স্টার দিয়েছেন 🌟`);
}

// ❓ FAQ Toggle Enhancement
document.querySelectorAll(".faq-section details").forEach((faq) => {
  faq.addEventListener("toggle", () => {
    console.log("FAQ toggled:", faq.querySelector("summary").textContent);
  });
});

// 🧾 Coupon Apply Demo
function applyCoupon(code) {
  const validCoupons = { SAVE50: 50, BD10: 10 };
  if (validCoupons[code]) {
    alert(`কুপন "${code}" প্রয়োগ হয়েছে 🎉 ${validCoupons[code]}% ছাড়`);
  } else {
    alert("অবৈধ কুপন কোড ❌");
  }
}

// 📦 Product Availability Checker
function checkAvailability(location) {
  const availableZones = ["Dhaka", "Chattogram", "Khulna"];
  if (availableZones.includes(location)) {
    alert(`${location}-এ পণ্য ডেলিভারি সম্ভব ✅`);
  } else {
    alert(`${location}-এ আপাতত ডেলিভারি নেই ❌`);
  }
}

// 🗺️ Delivery Validator with Input
function validateDelivery() {
  const userArea = prompt("আপনার এলাকা লিখুন:");
  checkAvailability(userArea);
}
// 🧊 Skeleton Loader on Page Load
function showSkeletonLoader() {
  const productSection = document.getElementById("productDetail");
  productSection.innerHTML = "<p>লোড হচ্ছে...</p>"; // বা skeleton div বানাতে পারো
}

// 🌐 Fetch Product Details from API (Demo)
async function loadProductData(productId) {
  showSkeletonLoader();
  try {
    const res = await fetch(`/api/products/${productId}`);
    const data = await res.json();
    // displayProductDetails(data); ← future function
  } catch (err) {
    console.error("API Fetch Error:", err);
    alert("পণ্য ডেটা লোড করা যায়নি ❌");
  }
}

// 🌍 Language Change Integration (trigger JS side)
function handleLanguageSwitch(words) {
  document.getElementById("productTitle").textContent = words.product_title;
  document.getElementById("priceLabel").textContent = words.price_label;
  document.getElementById("addToCartBtn").textContent = words.add_to_cart;
  document.getElementById("wishlistBtn").textContent = words.wishlist;
}

// 🌙 Dark/Light Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// ♿ Accessibility Focus Trap in Modal (demo)
function trapFocus(modalId) {
  const modal = document.getElementById(modalId);
  const focusable = modal.querySelectorAll("button, [tabindex]:not([tabindex='-1'])");
  let first = focusable[0];
  let last = focusable[focusable.length - 1];

  modal.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
// 🖼️ Image Zoom on Hover
document.getElementById("mainImage")?.addEventListener("mousemove", function (e) {
  const rect = this.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  this.style.transformOrigin = `${x}% ${y}%`;
  this.style.transform = "scale(1.8)";
});

document.getElementById("mainImage")?.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});

// ➕ Quantity Stepper
const qtyInput = document.getElementById("qtyInput");
qtyInput?.addEventListener("wheel", function (e) {
  e.preventDefault();
  this.value = Math.max(1, parseInt(this.value) + (e.deltaY < 0 ? 1 : -1));
});

// 🧡 Wishlist Overlay Save
function addToWishlist() {
  const title = document.getElementById("productTitle").textContent;
  let wish = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (!wish.includes(title)) {
    wish.push(title);
    localStorage.setItem("wishlist", JSON.stringify(wish));
    showOverlay(`${title} ✅ Wishlist-এ যোগ হয়েছে`);
  } else {
    showOverlay("এই পণ্য আগেই Wishlist-এ রয়েছে 🛑");
  }
}

// 🚚 Delivery Area Validation
function validateDelivery() {
  const area = prompt("আপনার এলাকা লিখুন:");
  const zones = ["Dhaka", "Khulna", "Chattogram"];
  if (zones.includes(area)) {
    showOverlay(`✅ ${area}-এ ডেলিভারি সম্ভব`);
  } else {
    showOverlay(`❌ ${area}-এ ডেলিভারি সম্ভব নয়`);
  }
}

// ⭐ Add Rating Stars
function setRating(rating) {
  const stars = document.querySelectorAll(".rating-star");
  stars.forEach((s, i) => {
    s.style.color = i < rating ? "#ffa000" : "#ccc";
  });
  showOverlay(`⭐ ${rating} স্টার দেওয়া হয়েছে`);
}

// 🔁 Related Product Slider
let slider = document.querySelector(".related-grid");
setInterval(() => {
  if (slider) {
    slider.scrollLeft += 160;
    if (slider.scrollLeft >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }
}, 5000);

// 🧠 Focus Trap in Modal
function trapFocus(modalId) {
  const modal = document.getElementById(modalId);
  const focusable = modal.querySelectorAll("button, [tabindex]:not([tabindex='-1'])");
  let first = focusable[0];
  let last = focusable[focusable.length - 1];

  modal?.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// ✅ Toast/Overlay Feedback
function showOverlay(msg) {
  const box = document.createElement("div");
  box.className = "toast";
  box.textContent = msg;
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3000);
}
