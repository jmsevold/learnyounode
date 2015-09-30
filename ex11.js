var http     = require("http");
var port     = Number(process.argv[2]);
var filePath = process.argv[3];
var fs       = require('fs');


var server = http.createServer(function (req, res) {
	var readStream = fs.createReadStream(filePath);
	  readStream.on('open', function () {
    
      readStream.pipe(res);
    });

  
    readStream.on('error', function(err) {
      res.end(err);
    });
  
})
server.listen(port);