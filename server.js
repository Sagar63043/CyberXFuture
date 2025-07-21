const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // frontend files here

const uri = process.env.MONGO_URI;
let db;

MongoClient.connect(uri).then(client => {
  db = client.db("cyberx");
  console.log("✅ MongoDB Connected");
});

// 👤 Registration
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const exists = await db.collection("users").findOne({ email });
  if (exists) return res.status(400).json({ message: "⚠️ Email already exists." });

  await db.collection("users").insertOne({ username, email, password });
  res.json({ message: "✅ Registered successfully." });
});

// 🔑 Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await db.collection("users").findOne({ email });
  if (!user) return res.status(404).json({ message: "❌ Email not found." });
  if (user.password !== password)
    return res.status(401).json({ message: "⚠️ Please use the same password used during registration." });

  res.json({ message: "✅ Login successful", user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
