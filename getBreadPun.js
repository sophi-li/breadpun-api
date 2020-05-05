const breadpuns = require("./breadpuns");

const getBreadPun = () => {
  breadpuns[Math.floor(Math.random() * breadpuns.length)];
  console.log("Got bread pun");
};

module.exports = getBreadPun;
