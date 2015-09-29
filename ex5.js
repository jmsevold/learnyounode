var fs = require('fs');
var path = require('path');
var filesPath = process.argv[2];
var extension = "." + process.argv[3];



fs.readdir(filesPath,function (err,files) {
	if (err)  console.log(err);
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		var ext = path.extname(file);
		if(ext === extension){
			console.log(file);
		}
	};
})

