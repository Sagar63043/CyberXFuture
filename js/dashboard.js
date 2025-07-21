// Fetch IP
fetch("https://api.ipify.org/?format=json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("userIp").innerText = data.ip;
  });

// Ask for Camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => console.log("📷 Camera Access Granted"))
  .catch(() => alert("⚠️ Camera permission denied"));

// Ask for Mic
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => console.log("🎤 Microphone Access Granted"))
  .catch(() => alert("⚠️ Microphone permission denied"));

// Ask for Location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log("📍 Location:", pos.coords.latitude, pos.coords.longitude);
  });
}

// Rotating Background Images
const images = [
  'assets/images/bg1.jpg',
  'assets/images/bg2.jpg',
  'assets/images/bg3.jpg',
  'assets/images/bg4.jpg'
];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("bgImage").src = images[index];
}, 5000);

// Logout Button
document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("👋 Logout successful.");
  window.location.href = "index.html";
});
