document.getElementById("supportForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2 || !email.includes("@") || message.length < 5) {
    alert("⚠️ সকল তথ্য সঠিকভাবে পূরণ করুন");
    return;
  }

  alert(`✅ ধন্যবাদ ${name}! আপনার বার্তা পাঠানো হয়েছে।`);
  this.reset();
});

// 💬 Chat Demo
function startChat() {
  alert("💬 চ্যাট শুরু হচ্ছে... (ডেমো ভার্সন)");
}

// 📞 Callback Demo
function requestCallback() {
  alert("📞 কলব্যাক রিকোয়েস্ট সফলভাবে গ্রহণ করা হয়েছে!");
}
