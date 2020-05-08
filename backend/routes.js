const express = require("express");
const cors = require("cors");
const getBreadPun = require("./getBreadPun");

const router = express.Router();

router.get("/", cors(), (req, res) => {
  res.json({ message: "Hello world!" });
});

router.get("/breadpuns", cors(), (req, res) => {
  res.json(getBreadPun());
});
