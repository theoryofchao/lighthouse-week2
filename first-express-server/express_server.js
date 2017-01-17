var express = require(`express`);
var server = express();
var PORT = process.env.PORT || 8080; //defualt port 8080;

var urlDatabase = {
  "b2xVn2": `http://lighthouselabs.ca`,
  "9sm4xK": `http://www.google.com`
};

server.get(`/`, (request, response) => {
  response.end(`Hello!`);
});

server.get(`/urls.json`, (request, response) => {
  response.json(urlDatabase);
});

server.get(`/hello`, (request, response) => {
  response.end(`<html><body>Hello <b>World</b></body></html>\n`);
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
