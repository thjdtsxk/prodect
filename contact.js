document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2 || !email.includes("@") || message.length < 5) {
    alert("⚠️ সঠিকভাবে তথ্য পূরণ করুন");
    return;
  }

  alert(`✅ ধন্যবাদ ${name}! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।`);
  this.reset();
});
