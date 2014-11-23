exports.list = function(req, res){
	req.db.view('genres/genres', {group: true, reduce: true}, function (err, data) {
		res.render("genre", {activeTab: "Genre", data: data});
	});
	
};
