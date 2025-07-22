document.getElementById("cyberForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email !== password) {
    alert("❌ Password must be the same as Email.");
    return;
  }

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  const data = await res.json();
  document.getElementById("response").textContent = data.message;

  if (res.ok) {
    setTimeout(() => window.location.href = "login.html", 1500);
  }
});
