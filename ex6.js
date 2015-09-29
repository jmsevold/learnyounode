var filesPath = process.argv[2];
var extension = process.argv[3];
var myModule  = require('./mymodule');

myModule(filesPath, extension, function(err, files) {
    if (err) return console.error(err);
    for (var i = 0; i < files.length; i++) {
   	  console.log(files[i]);
    }
});



