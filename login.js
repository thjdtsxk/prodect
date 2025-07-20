document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const terms = document.querySelector(".terms input").checked;

  if (!email.includes("@") || email.length < 5) {
    alert("⚠️ সঠিক ইমেইল বা ফোন দিন");
    return;
  }

  if (pass.length < 4) {
    alert("⚠️ পাসওয়ার্ড অবশ্যই ৪ বা ততোধিক অক্ষর হতে হবে");
    return;
  }

  if (!terms) {
    alert("⚠️ আপনাকে শর্তাবলীতে সম্মত হতে হবে");
    return;
  }

  alert(`✅ স্বাগতম! লগইন সফল ${document.getElementById("email").value}`);
  // Future redirect: window.location.href = "/dashboard.html";
});

// 🎯 Social Login Demo
function socialLogin(provider) {
  alert(`🔗 ${provider} এর মাধ্যমে লগইন হচ্ছে... (ডেমো)`);
  // Future: OAuth redirect here
}
