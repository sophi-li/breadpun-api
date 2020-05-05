const breadpuns = require("./breadpuns");

const getBreadPun = () => {
  return breadpuns[Math.floor(Math.random() * breadpuns.length)];
};

module.exports = getBreadPun;
