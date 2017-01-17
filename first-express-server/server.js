var express = require(`express`);
var server = express();

//set the view engine to ejs
server.set('view engine', 'ejs');

var PORT = process.env.PORT || 8080; //defualt port 8080;

var urlDatabase = {
  "b2xVn2": `http://lighthouselabs.ca`,
  "9sm4xK": `http://www.google.com`
};

//index page
server.get('/', (request, response) => {
  var drinks = [
    {name: `Bloody Mary`, drunkness: 3},
    {name: `Martini`, drunkness: 5},
    {name: `Scotch`, drunkness: 10}
  ];

  var tagline = "Any of of your own that you haven't looked at for six or more month might as well been written by someone else";

  response.render('pages/index', {
    drinks: drinks,
    tagline: tagline    
  });
});

//about page
server.get('/about', (request, response) => {
  response.render('pages/about');
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
