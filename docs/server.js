const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log("❌ MongoDB Error:", err));

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('docs'));

// ✅ Register
app.post('/register', async (req, res) => {
  const { username, password, ip, location, permissions, device } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) return res.json({ success: false, message: "⚠️ Username already taken" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
    ip,
    location,
    permissions,
    device
  });

  await user.save();
  res.json({ success: true, message: '✅ Registered successfully' });
});

// ✅ Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.json({ success: false, message: "❌ User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ success: false, message: "❌ Invalid password" });

  res.json({ success: true, message: '✅ Login successful' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
