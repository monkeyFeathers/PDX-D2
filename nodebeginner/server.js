var http = require("http");
var port = 8888;

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-type": "text/html"});
  response.write("In your face world");
  response.end();
});

server.listen(port, function(){
  console.log("Server started on port: " + port + "; Ctrl C to stop");
});
