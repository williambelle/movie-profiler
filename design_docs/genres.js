module.exports = {
	_id : "_design/genres",

	views : {

		genres : {
			
			map : function(doc) {
				for (var genre in doc.genre) {
					if (doc.genre[genre]) {
						emit(doc.genre[genre], 1);
					}
				}
			},
			
			reduce : function(key, values, rereduce) {
				return sum(values);
			}
		}

	}
};