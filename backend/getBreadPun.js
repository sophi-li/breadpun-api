const breadpuns = require('./Breadpuns')

const getBreadPun = () => {
  return breadpuns[Math.floor(Math.random() * breadpuns.length)]
}

module.exports = getBreadPun
