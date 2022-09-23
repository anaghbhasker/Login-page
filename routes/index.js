var express = require("express");
var router = express.Router();
let products = require("../public/javascripts/product");

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.login) {
    res.render("home", { products });
  } else {
    res.render("index", { loginErr: req.session.loginErr });
    req.session.loginErr = false;
  }
});
/* GET home page. */


// Login true or false

const username = "anaghbhasker";
const password = "12345";

router.post("/login", (req, res) => {
  const data = {
    name: req.body.username,
    pass: req.body.password,
  };
  if (data.name === username && data.pass === password) {
    req.session.login = true;
    res.redirect("/");
  } else {
    req.session.loginErr = true;
    res.redirect("/");
  }
});

// Login true or false


// Logout press

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

// Logout press

module.exports = router;
