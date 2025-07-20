const faqs = [
  {
    question: "আমি অর্ডার কিভাবে ট্র্যাক করবো?",
    answer: "আপনি order-status.html পেইজে গিয়ে অর্ডার ID দিয়ে ট্র্যাক করতে পারবেন।"
  },
  {
    question: "রিটার্ন করার নিয়ম কী?",
    answer: "আপনি return-policy.html পেইজে বিস্তারিত নিয়ম পাবেন।"
  },
  {
    question: "পেমেন্ট অপশন কী কী?",
    answer: "আমরা ক্যাশ অন ডেলিভারি, মোবাইল পেমেন্ট এবং কার্ড পেমেন্ট (ডেমো) সাপোর্ট করি।"
  },
  {
    question: "রিফান্ড কতদিনে হয়?",
    answer: "রিটার্ন সফল হলে ৫-৭ কার্যদিবসের মধ্যে রিফান্ড হয়।"
  }
];

// Render FAQ
function renderFAQs(filter = "") {
  const list = document.getElementById("faqList");
  list.innerHTML = "";

  faqs
    .filter(faq => faq.question.includes(filter))
    .forEach((faq, index) => {
      const item = document.createElement("div");
      item.className = "faq-item";

      const button = document.createElement("button");
      button.textContent = faq.question;
      button.onclick = () => {
        const answer = document.getElementById(`answer-${index}`);
        answer.style.display = answer.style.display === "none" ? "block" : "none";
      };

      const answer = document.createElement("div");
      answer.className = "faq-answer";
      answer.id = `answer-${index}`;
      answer.textContent = faq.answer;

      item.appendChild(button);
      item.appendChild(answer);
      list.appendChild(item);
    });
}

// Search Listener
document.getElementById("faqSearch")?.addEventListener("input", (e) => {
  renderFAQs(e.target.value.trim());
});

// Init
window.onload = () => renderFAQs();
