document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPass").value;
  const terms = document.querySelector('.checkbox-row input[type="checkbox"]').checked;

  // ✅ Basic Validation
  if (name.length < 2) {
    alert("⚠️ পূর্ণ নাম অবশ্যই ২ অক্ষরের বেশি হতে হবে");
    return;
  }

  if (!email.includes("@") || email.length < 5) {
    alert("⚠️ সঠিক ইমেইল লিখুন");
    return;
  }

  if (!phone.match(/^01[3-9]\d{8}$/)) {
    alert("⚠️ বৈধ বাংলা মোবাইল নম্বর দিন");
    return;
  }

  if (pass.length < 4) {
    alert("⚠️ পাসওয়ার্ড অবশ্যই ৪ অক্ষরের বেশি হতে হবে");
    return;
  }

  if (pass !== confirm) {
    alert("⚠️ পাসওয়ার্ড এবং নিশ্চিতকরণ মিলছে না");
    return;
  }

  if (!terms) {
    alert("⚠️ শর্তাবলীতে সম্মত হতে হবে");
    return;
  }

  alert(`✅ স্বাগতম ${name}! একাউন্ট তৈরি সফল 🎉`);
  // Future: Redirect to dashboard or send OTP
});
