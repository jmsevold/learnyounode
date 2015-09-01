var filePath = process.argv[2];

var fs = require('fs');

var bufferFile = fs.readFileSync(filePath);

var strFile = bufferFile.toString();

var count = strFile.split('\n').length - 1;

console.log(count);