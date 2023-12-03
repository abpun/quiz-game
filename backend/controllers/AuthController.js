const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

exports.register = async (req, res) => {
  const { name = "Digi User", username, level, password } = req.body;

  try {
    if (!username || !password || !level) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const isUsernameAvailable = await User.findOne({ username });
    if (isUsernameAvailable) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      name,
      username,
      level,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).json({ message: "User created" });
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ message: "Failed to register user" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidUser = bcrypt.compareSync(password, user.password);
    if (!isValidUser) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const userDetails = {
      uid: user._id,
      name: user.name,
      level: user.level,
      username: user.username,
    };

    const session = jwt.sign(userDetails, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    res.status(200).json({
      session,
      message: "User logged in",
      userDetails: userDetails,
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Failed to log in" });
  }
};
