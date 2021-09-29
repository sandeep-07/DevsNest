var express = require("express");
var router = express.Router();
var registerInitialCheck = require("../middlewares/registerCheck");
var register = require("../controllers/register");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/*
 * email validate @
 * password validate - string
 * password==confirm
 * JS/SQL
 * check if email exists
 * password hash
 * email lowercase
 * save
 */

router.post("/register", registerInitialCheck, register);

module.exports = router;
