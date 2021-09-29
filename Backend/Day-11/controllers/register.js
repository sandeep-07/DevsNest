var bcrypt = require("bcryptjs");
const User = require("../models/user");
const register = async (req, res) => {
  const { email, apssword } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email exists");
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
    });
    const savedUser = await newUser.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(500).send("error hai koi");
  }
};

module.exports = register;
