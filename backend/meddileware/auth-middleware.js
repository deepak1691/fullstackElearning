const jwt = require("jsonwebtoken");
const { User_ } = require("../models/userSchema");

module.exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({message: "Token not provided" });
    }

    const jwtToken = token.replace("Bearer ", "").trim();

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User_.findOne({ email: isVerified.email }).select({ password: 0 });

    if (!userData) {
      return res.status(404).json({message: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
