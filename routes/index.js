
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log(req.db);
	req.db.view('titles/titles', function (err, data) {
		var toDisplay = [];
		data.forEach(function(key, value) {
			value.title = key;
			toDisplay.push(value);
		});
		res.render('index', {table : toDisplay});
	});
	
};