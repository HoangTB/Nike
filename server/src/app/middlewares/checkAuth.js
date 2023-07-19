const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.configs');

const checkAuthentication = (req, res, next) => {
  const authHeader = req.header('Authorization');

  const token = authHeader && authHeader.split(' ')[1];
  if (!token) res.sentStatus(401);
  try {
    const decoded = jwt.verify(token, sceretKey);
    next();
  } catch (err) {
    return res.sentStatus(403);
  }
};
module.exports = checkAuthentication;
