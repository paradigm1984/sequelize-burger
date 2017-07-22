
var connection = require("../config/connections.js");

// function to help generate mysql syntax
function printQuestionMarks(num) {

	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// function to help generate mysql syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {
	// selects all burgers
	selectAll: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
			// console.log(result);
		});
	},

	// inserts a new burger
	
	insertOne: function(table, cols, vals, cb) {

		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
		
		});
	},

	// updates an existing burger
	updateOne: function(table, objColVals, condition, cb) {
		// Construct the query string that updates a single entry in the target table
		// console.log(objColVals);
		// console.log(condition);

		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		// console.log(queryString);

		// Perform the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// Return results in callback
			cb(result);
			console.log(result);
		});
	}

} // === END orm object


module.exports = orm;


