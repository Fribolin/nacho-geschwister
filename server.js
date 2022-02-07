const express = require("express");
const path = require("path");

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, '/')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/krankheiten.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/krankheiten.html"));
});

app.get("/diagnose.html", function (req, res) {
  res.sendFile(path.join(__dirname, "/diagnose.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
