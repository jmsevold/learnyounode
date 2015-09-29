var fs = require('fs');
var path = require('path');

module.exports = 

function (filesPath, extension, callback) {
    fs.readdir(filesPath, function (err, list) {
        if (err) return callback(err);
        var filesList = [];
        var ext = '.' + extension;
        
        for (var i = 0; i < list.length; i++) {
            file = list[i];
            if (path.extname(file) === ext) {
                filesList.push(file);
            }
        };
        return callback(null, filesList);
    })
}








