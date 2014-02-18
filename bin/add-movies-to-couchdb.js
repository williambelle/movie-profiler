
/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var cradle = require('cradle');
var colors = require('colors');
var config = require('../configuration/configuration');

var connection = new(cradle.Connection)();
var db = connection.database(config.db.name);

db.exists(function (err, exists) {
	if (err) {
		console.log('Error : ', err);
	} else if (exists) {
		console.log('Database already exists'.green);
	} else {
		console.log('Creating database'.green);
		db.create();
	}
});