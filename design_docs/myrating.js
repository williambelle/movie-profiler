module.exports = {
	_id : "_design/myrating",

	views : {

		myrating : {

			map : function(doc) {
				emit(null, parseInt(doc.myrating, null));
			},

			reduce : function(key, values, rereduce) {
				var avg  = sum(values) / values.length;
				return parseFloat(avg.toFixed(2));
			}
		}

	}
};
