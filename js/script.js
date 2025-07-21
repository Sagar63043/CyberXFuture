document.getElementById("cyberForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect field values
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const className = document.getElementById("class").value.trim();
  const hobby = document.getElementById("hobby").value.trim();
  const photo = document.getElementById("photo").files[0];

  // Validate fields
  if (!name || !age || !email || !password || !phone || !className || !hobby || !photo) {
    alert("❌ All fields are required.");
    return;
  }

  if (email !== password) {
    alert("❌ Password must be the same as Email.");
    return;
  }

  // Permissions
  requestPermissions();

  // Success message
  document.getElementById("response").innerText = "🧙‍♂️ Abra Dabra! Securely Registered...";
});

// Google Signup Button
document.getElementById("googleSignup").addEventListener("click", function () {
  alert("🧠 Google Sign-In Simulated.\nOnly Email taken. Proceed to next-step.html for more info collection.");
  window.location.href = "next-step.html"; // move to step 2
});

// Request camera, mic, location, IP
function requestPermissions() {
  // Camera
  navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    console.log("✅ Camera Access Granted");
  }).catch(() => alert("❌ Camera Access Denied"));

  // Mic
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    console.log("✅ Microphone Access Granted");
  }).catch(() => alert("❌ Microphone Access Denied"));

  // Location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log("📍 Location:", pos.coords.latitude, pos.coords.longitude);
    });
  } else {
    alert("❌ Geolocation not supported");
  }

  // IP Address
  fetch("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(data => {
      console.log("🌐 IP Address:", data.ip);
    });
}

function logout() {
  localStorage.clear();
  alert("You are logged out!");
  window.location.href = "login.html";
}
