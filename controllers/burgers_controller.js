
var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var burger = require("../models/burger.js");
var methodOverride = require("method-override");;



router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		res.render('index', hbsObject);
	});

});

router.post('/burgers', function(req, res) {
	burger.insertOne([
		'burger_name'
	], [
	req.body.burger_name
	], function(data) {
		res.redirect('/');
	});
});

router.post('/burgers/:id', function(req, res) {
	var condition = req.params.id;
	// console.log(condition);
	burger.updateOne({
		eaten: true
	}, condition, function(data) {
		res.redirect('/');
	}); 
	console.log(req.params.id);
});

module.exports = router;
