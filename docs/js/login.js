document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  const msgEl = document.getElementById("loginResponse");

  if (res.ok) {
    msgEl.textContent = data.message;
    localStorage.setItem("user", JSON.stringify(data.user));
    setTimeout(() => window.location.href = "dashboard.html", 1500);
  } else {
    msgEl.textContent = data.message || "❌ Login failed.";
  }
});
