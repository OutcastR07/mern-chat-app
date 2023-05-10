const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");

const app = express();
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
