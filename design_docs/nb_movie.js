module.exports = {
	_id : "_design/nb_movie",

	views : {

		nb_movie : {

			map : function(doc) {
				emit(null,1);
			},

			reduce : function(key, values, rereduce) {
				return sum(values);
			}
		}

	}
};
