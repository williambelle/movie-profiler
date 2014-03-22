module.exports = {
	_id : "_design/titles",

	views : {

		titles : {

			map : function(doc) {
				emit(doc.title, {
					duration : doc.duration, 
					year : doc.year, 
					rating : doc.rating
				});
			}
		}

	}
};