// js/dbhandler.js

require('dotenv').config(); // .env file से Mongo URI लाने के लिए
const mongoose = require('mongoose');

// MongoDB से connect करें
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// Schema बनाएं
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Model बनाएं
const User = mongoose.model('User', userSchema);

// USER को MongoDB में save करने का function
async function saveUserData(username, password) {
  const user = new User({ username, password });
  await user.save();
  console.log("✅ User saved:", user);
}

// USER को MongoDB से पढ़ने का function
async function getUserData(username) {
  return await User.findOne({ username });
}

// Functions को export करें ताकि server.js use कर सके
module.exports = {
  saveUserData,
  getUserData
};
