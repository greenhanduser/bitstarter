var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    var fileContent = fs.readFileSync('index.html', 'utf-8',function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
    var fileContentString = fileContent.toString('utf8');
    response.send(fileContentString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
