var express = require("express");
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index")
});

router.get("/covid_19", function (req, res, next) {
  res.render("covid_19")
});

router.get("/help", function (req, res, next) {
  res.render("help")
});

router.get('/login', function(req, res, next) {
  res.render("login")
});

router.get('/register', function(req, res, next) {
  res.render("register")
});

router.get("/content", function (req, res, next) {
  res.render("content")
});

module.exports = router;
