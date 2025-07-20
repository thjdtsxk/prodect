// 🚀 API Endpoint Base
const BASE_URL = "https://api.fashionfusion.com";

// 📦 Fetch Orders
async function fetchOrders() {
  try {
    const res = await fetch(`${BASE_URL}/orders`);
    const data = await res.json();
    console.log("🔁 অর্ডার ডেটা:", data);
    // You can now render data to admin panel
  } catch (error) {
    console.error("❌ অর্ডার ফেচে সমস্যা:", error);
  }
}

// 🛍️ Add Product
async function addProduct(product) {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });
    const result = await res.json();
    alert(`✅ ${result.title} সফলভাবে যোগ হয়েছে`);
  } catch (error) {
    alert("❌ পণ্য যোগে সমস্যা হয়েছে");
  }
}

// 🧑‍💼 Delete User
async function deleteUser(userId) {
  try {
    const res = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE"
    });
    if (res.ok) {
      alert(`🧹 ইউজার ${userId} ডিলিট হয়েছে`);
    }
  } catch (error) {
    alert("❌ ইউজার ডিলিট করতে পারিনি");
  }
}

// 🌙 Toggle Setting
async function toggleSetting(key, value) {
  try {
    const res = await fetch(`${BASE_URL}/settings/${key}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value })
    });
    if (res.ok) {
      console.log(`✅ সেটিং ${key} আপডেট: ${value}`);
    }
  } catch (error) {
    console.warn("⚠️ সেটিং পরিবর্তনে সমস্যা:", error);
  }
}
