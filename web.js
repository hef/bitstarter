var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  "use strict";
  var content = fs.readFileSync("index.html").toString();
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  "use strict";
  console.log("Listening on " + port);
});
