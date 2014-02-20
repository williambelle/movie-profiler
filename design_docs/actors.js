module.exports = {
	_id : "_design/actors",

	views : {

		actors : {

			map : function(doc) {
				for (var actor in doc.cast) {
					if (doc.cast[actor]) {
						emit(doc.cast[actor], 1);
					}
				}
			},
			
			reduce : function(key, values) {
				return values.length;
			}
		}

	}
};