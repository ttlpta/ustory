const jwt = require('jsonwebtoken');
const configs = require('./configs');

module.exports = {
  getJwtToken : (id, keepLogin) => {
    return jwt.sign({ id }, configs.jwtToken, {
      expiresIn: keepLogin ? configs.jwtExpiredLongTine : configs.jwtExpiredTine // expires in 24 hours
    });
  },
  verifyJwtToken : token => {
    return jwt.verify(token, configs.jwtToken);
  }
}
