var express = require("express");
var router = express.Router();
var mysql = require("mysql");
const bodyparser = require('body-parser') 

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index");
});
router.get("/covid_19", function (req, res, next) {
	res.render("covid_19");
});
router.get("/login", function (req, res, next) {
	res.render("login");
});
router.get("/register", function (req, res, next) {
	res.render("register");
});

router.get("/nav", function (req, res, next) {
	res.render("nav");
});
router.get("/searchplace", function (req, res, next) {
	res.render("searchplace");
});


router.get("/content", function (req, res, next) {
	res.render("contentAll/content");
});
router.get("/content2", function (req, res, next) {
	res.render("contentAll/content2");
});
router.get("/content3", function (req, res, next) {
	res.render("contentAll/content3");
});
router.get("/content4", function (req, res, next) {
	res.render("contentAll/content4");
});
router.get("/content5", function (req, res, next) {
	res.render("contentAll/content5");
});
router.get("/content6", function (req, res, next) {
	res.render("contentAll/content6");
});



var connection = mysql.createConnection({
	host: "localhost", //or name (dns)
	user: "root",
	password: "",
	database: "myweb",
});
connection.connect((err) => {
	if (err) {
		console.log("database connect failed...");
	} else {
		console.log("database connected...");
	}
});
router.post("/register", function (req, res) {
	console.log("req", req.body);
	var users = {
		user_name: req.body.user_name,
		email: req.body.email,
		password: req.body.password,
		// confirm_password: req.body.confirm_password,
	};
	connection.query("INSERT INTO users SET ?", users, function (error, results, fields) {
		if (error) {
			console.log("error ocurred", error);
			res.send({
				code: 400,
				failed: "user name is already in use",
			});
		} else {
			console.log("The solution is: ", results);
			res.render("index");
		}
	});
});
router.post("/login", function (req, res) {
	var user_name = req.body.user_name;
	var password = req.body.password;
	connection.query("SELECT * FROM users WHERE user_name = ?", [user_name], function (error, results, fields) {
		if (error) {
			// console.log("error ocurred",error);
			res.send({
				code: 400,
				failed: "error ocurred",
			});
		} else {
			// console.log('The solution is: ', results);
			if (results.length > 0) {
				if (results[0].password == password) {
					res.render("index");
				} else {
					res.send({
						code: 204,
						success: "User and password does not match",
					});
				}
			} else {
				res.send({
					code: 204,
					success: "User does not exits",
				});
			}
		}
	});
});
module.exports = router;