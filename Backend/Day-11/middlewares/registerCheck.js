const { emailValidate, passwordValidate } = require("../utils/emailValidate");
const registerInitialCheck = (req, res, next) => {
  console.log(req.body);
  const { email, password, confirmPassword } = req.body;

  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    console.log(emailValidate(email), passwordValidate(password));
    res.status(401).send("Initial cheeeeck failed");
  }
};
module.exports = registerInitialCheck;
