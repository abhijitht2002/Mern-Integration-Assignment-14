const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    console.log("Request headers: ", req.headers);
    console.log("Authorization header: ", req.headers.authorization);

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "No token provided" });
    }

    const isValid = jwt.verify(authHeader, process.env.JWT_SECRET_KEY);
    if (!isValid) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    next();
  } catch (error) {
    console.error("Auth error: ", error);
    return res.status(400).json({ error: "Invalid token or token expired" });
  }
};

module.exports = checkAuth;
