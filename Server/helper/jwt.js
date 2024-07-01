const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET

const makeToken = (payload) => {
  return jwt.sign(payload, secret);
};

const verifyToken = (payload) => {
  return jwt.verify(payload, secret);
};

module.exports = {
  makeToken,
  verifyToken,
};
