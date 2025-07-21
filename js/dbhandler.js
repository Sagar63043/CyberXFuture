// dbhandler.js
// 🔐 Store & retrieve user login data (for demo/testing only)

function saveUserData(username, password) {
  localStorage.setItem("userData", JSON.stringify({ username, password }));
}

function getUserData() {
  return JSON.parse(localStorage.getItem("userData")) || null;
}

function isAuthenticated(username, password) {
  const saved = getUserData();
  return saved && saved.username === username && saved.password === password;
}

function logoutUser() {
  localStorage.removeItem("userData");
}
