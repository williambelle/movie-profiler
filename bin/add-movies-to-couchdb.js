
/**
 * Module dependencies.
 */

var fs = require('fs');
var cradle = require('cradle');
var colors = require('colors');
var config = require('../configuration/configuration');

var connection = new(cradle.Connection)();
var db = connection.database(config.db.name);

db.exists(function (err, exists) {
	if (err) {
		console.log('Error : ', err);
	} else if (exists) {
		console.log('Database already exists'.red);
	} else {
		console.log('Creating database'.green);
		db.create();
		addMovies();
	}
});

function addMovies(){	
	var directory = process.argv[2];
	
	// list files in directory
	var files = fs.readdirSync(directory);
	for (var i=0; i<files.length; i++){
		
		// read file and parse content
		var content = fs.readFileSync(directory+files[i], 'utf8');
		content = JSON.parse(content);
		
		// insert movie in couchDB
		db.save(content.id.toString(), content, saveCouchDBError);
	}
}

function saveCouchDBError(err, res){
	if (err){
		console.log('Error : ', err);
	}
}