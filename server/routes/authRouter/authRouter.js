const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

const router = Router();

router.post(
  "/register",
  [
    check("name", "Name is required").exists(),
    check("email", "Incorrect email").isEmail(),
    check("password", "Min password length is 6 symbols").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          errorsArr: errors.array().map(({ msg }) => msg),
        });
      }

      const { email, name, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ errorsArr: ["Email is already in use"] });
      }

      const hashedPassword = await bcrypt.hash(password, 8);

      const user = new User({ email, name, password: hashedPassword });
      await user.save();
      res.status(201).json({});
    } catch (e) {
      console.log(e);
      res.status(500).json({ errorsArr: ["Something went wrong"] });
    }
  }
);
router.post(
  "/login",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Min password length is 6 symbols").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          errorsArr: errors.array().map(({ msg }) => msg),
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errorsArr: ["User not found"] });
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return res.status(400).json({ errorsArr: ["Invalid password"] });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "2h",
      });

      res.json({ token, userId: user._id, userName: user.name });
    } catch (e) {
      res.status(500).json({ errorsArr: ["Something went wrong"] });
    }
  }
);

module.exports = router;
