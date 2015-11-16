var fs = require('fs');

fs.readFile('data/test.txt', {
	encoding: 'utf8'
}, function(error, data) {
	if(error) {
		return console.error(error.message);
	}
	console.log(data);
});

	