var filePath = process.argv[2];

var fs = require('fs');

fs.readFile(filePath, function (err,data) {
	if (err) throw err;
	var strFile = data.toString();
	var count = strFile.split('\n').length - 1;
    console.log(count);

});