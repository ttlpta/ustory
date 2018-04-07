const jwt = require('jsonwebtoken');
const configs = require('./configs');

module.exports = {
  getJwtToken : email => {
    return jwt.sign({ email }, configs.jwtToken, {
      expiresIn: configs.jwtExpiredTine // expires in 24 hours
    });
  },
  verifyJwtToken : token => {
    return jwt.verify(token, configs.jwtToken);
  }
}
