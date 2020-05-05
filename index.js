const express = require("express");
const getBreadPun = require("./getBreadPun");
const breadpuns = require("./breadpuns");

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: getBreadPun() });
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});
