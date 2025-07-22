document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("⚠️ कृपया पहले लॉगिन करें।");
    window.location.href = "login.html";
    return;
  }

  // प्रोफाइल में यूज़र का नाम और ईमेल दिखाएँ
  document.getElementById("uname").textContent = user.username || "नाम उपलब्ध नहीं";
  document.getElementById("uemail").textContent = user.email || "ईमेल उपलब्ध नहीं";
});
