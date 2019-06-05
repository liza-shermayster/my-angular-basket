const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "secret_key");
    req.userDataEmailId = { email: decodedToken.email, userId: decodedToken.userId }

    if (!req.headers.authorization) {
      res.send(401, 'missing authorization header');
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!!!!" });
  }
};
