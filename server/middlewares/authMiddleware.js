const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const authMiddleware = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
      return res.status(401).json({ errorsArr: ["User is not authorized"] });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ errorsArr: ["User is not authorized"] });
  }
};

module.exports = { authMiddleware };
