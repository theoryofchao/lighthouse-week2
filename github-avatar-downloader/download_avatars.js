var repositories = process.argv.slice(2);

var https = require('https');

//Have it point to github later?
var requestOptions = {
        host: 'https://api.github.com',
  path: '/'
};

console.log(repositories);
