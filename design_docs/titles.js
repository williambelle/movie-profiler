module.exports = {
	_id : "_design/titles",

	views : {

		titles : {

			map : function(doc) {
				emit(doc.title, [doc.duration, doc.year, doc.rating]);
			}
		}

	}
};