// 📚 Sample Blog Data
const blogPosts = [
  {
    title: "✨ FashionFusion এর যাত্রা",
    content: "FashionFusion শুরু হয় একটি সাহসী উদ্যোগ নিয়ে — যেখানে প্রযুক্তি, ডিজাইন ও গল্পের মিলন ঘটে।",
    quote: "“আমরা শুধু পণ্য নয়, গল্প বিক্রি করি।” — রাফায়েত",
    image: "founder-story.jpg"
  },
  {
    title: "🧵 কিভাবে দেশি ক্রিয়েটরদের যুক্ত করা হয়",
    content: "প্রতিটি ক্রিয়েটর আমাদের প্ল্যাটফর্মে onboarding পায়, যেখানে content guidelines, monetization tools এবং discovery engine থাকে।",
    image: "creator-onboarding.jpg"
  }
];

// 🔁 Render Blog Content
function renderBlog() {
  const container = document.querySelector(".blog-content");
  blogPosts.forEach(post => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      ${post.quote ? `<blockquote>${post.quote}</blockquote>` : ""}
      ${post.image ? `<img src="${post.image}" alt="${post.title}" style="width:100%; border-radius:8px; margin-top:15px;" />` : ""}
    `;
    container.appendChild(article);
  });
}

// 🚀 Init
window.onload = renderBlog;
