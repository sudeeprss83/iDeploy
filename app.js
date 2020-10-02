require("dotenv").config();

const express = require("express");
const https = require("https");
const http = require("http");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
