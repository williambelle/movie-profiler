
/*
 * GET home page.
 */

exports.index = function(req, res){
	req.async.parallel([
		function(callback){
			req.db.view('nb_movie/nb_movie', function (err, data) {
				callback(null, data[0].value);
			});
		},
		function(callback){
			req.db.view('genres/genres', {group: true, reduce: true}, function (err, data) {
				callback(null, data.length);
			});
		},
		function(callback){
			req.db.view('topics/topics', {group: true, reduce: true}, function (err, data) {
				callback(null, data.length);
			});
		},
		function(callback){
			req.db.view('myrating/myrating', {group: true, reduce: true}, function (err, data) {
				callback(null, data[0].value);
			});
		}
	], function(err, data){
		
		res.render('index', {nbMovie : data[0], nbGenre: data[1], nbTopic: data[2], myrating: data[3]});
	});
};