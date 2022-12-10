var jwt = require("jsonwebtoken");
module.exports = {
  verifyToken: async (req, res, next) => {
    var token = req.headers.authorization;
    console.log(token,"get")
    try {
      if (token) {
        let payload = await jwt.verify(token, process.env.JWTSECRET);
        req.user = payload;
        next();
      } else {
        res.status(401).json({ error: "Token required!" });
      }
    } catch (error) {
      next(error);
    }
  },
};