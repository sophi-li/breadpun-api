const express = require("express");
const getBreadPun = require("./getBreadPun");

const app = express();

app.get("/api/breadpuns", (req, res) => {
  res.json(getBreadPun());
});

let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

module.exports = app;
