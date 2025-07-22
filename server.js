// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // .env से Mongo URI लाने के लिए

const { saveUserData, getUserData } = require("./docs/js/dbhandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('docs')); // Static HTML files serve करने के लिए

// ✅ Route: User Registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  await saveUserData(username, password);
  res.json({ success: true, message: 'User registered successfully' });
});

// ✅ Route: User Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserData(username);

  if (user && user.password === password) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// ✅ Server Listen
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
