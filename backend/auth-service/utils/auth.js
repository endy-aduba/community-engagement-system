// utils/auth.js
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    SECRET,
    { expiresIn: '1d' }
  );
};

module.exports = { createToken };
