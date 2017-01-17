const http = require(`http`);
const PORT = 8080;

// a function which handles requests and sends response
var requestHandler = function(request, response) {
  if(request.url == `/`) {
    response.end(`Welcome to ${request.url}`);
  }
  else if (request.url == `/urls`) {
    response.end(`www.lighthouselabs.ca\nwww.google.com`);
  }
  else {
    response.statusCode = 404;
    response.end(`Piss Off`);
  }

  //response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
