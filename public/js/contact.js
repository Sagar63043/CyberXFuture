
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        alert("⚠️ सभी फ़ील्ड भरना ज़रूरी है।");
        return;
      }

      // Future backend logic (send to dbHandler.js or server)
      alert("✅ आपका संदेश सफलतापूर्वक भेजा गया है!");
      form.reset();
    });
  }
});
