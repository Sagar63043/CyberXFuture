document.getElementById("nextForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const className = document.getElementById("class").value.trim();
  const hobby = document.getElementById("hobby").value.trim();
  const photo = document.getElementById("photo").files[0];

  if (!name || !age || !phone || !className || !hobby || !photo) {
    alert("⚠️ All fields are required.");
    return;
  }

  // Success message
  document.getElementById("nextResponse").innerText = "✅ Registration Complete! Redirecting to Dashboard...";

  // Redirect to dashboard after 2 seconds
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);
});
