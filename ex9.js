var http = require("http");

var urls = process.argv.slice(2);

var bl = require('bl');

var results = [];

var count = 0


function printResults () {
  results.forEach(function (data) {
    console.log(data)
  })
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()

      if (++count > 2)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)



