var net 	   = require("net");
var port 	   = Number(process.argv[2]);
var moment     = require('moment');
var stringDate = moment().format('YYYY-MM-DD HH:mm') + '\n'

    
var server = net.createServer(function (socket) {
  socket.end(stringDate); 
})

server.listen(port);





