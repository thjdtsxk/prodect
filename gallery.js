document.getElementById("galleryForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = document.getElementById("imageInput").files[0];
  if (file) {
    const preview = document.getElementById("previewArea");
    const reader = new FileReader();
    reader.onload = function (evt) {
      preview.innerHTML = `<img src="${evt.target.result}" alt="Uploaded Image" />`;
    };
    reader.readAsDataURL(file);
    alert("✅ ছবি আপলোড হয়েছে (ডেমো)");
  }
});
