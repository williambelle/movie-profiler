module.exports = {
	_id : "_design/movie_by_year",

	views : {

		movie_by_year : {

			map : function(doc) {
				emit(doc.year, 1);
			},

			reduce : function(key, values, rereduce) {
				return sum(values);
			}
		}

	}
};