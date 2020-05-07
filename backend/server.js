const express = require("express");
const getBreadPun = require("./getBreadPun");

const app = express();
let PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

app.get("/api/breadpuns", (req, res) => {
  res.json(getBreadPun());
});

module.exports = app;
