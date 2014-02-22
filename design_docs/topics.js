module.exports = {
	_id : "_design/topics",

	views : {

		topics : {
			
			map : function(doc) {
				for ( var topic in doc.topic) {
					if (doc.topic[topic]) {
						emit(doc.topic[topic], 1);
					}
				}
			},
			
			reduce : function(key, values, rereduce) {
				return sum(values);
			}
		}

	}
};
