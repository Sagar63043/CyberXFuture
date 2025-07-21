document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("❌ All fields are required.");
    return;
  }

  if (email !== password) {
    alert("❌ Email & Password must match (same as registration).");
    return;
  }

  document.getElementById("loginResponse").innerText = "✅ Login successful! Redirecting...";
  
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);
});
