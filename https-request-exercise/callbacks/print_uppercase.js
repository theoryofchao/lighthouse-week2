var getHTML = require(`./https-functions`);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  console.log(html.toUpperCase());        /* Write your code here! */

}

getHTML(requestOptions, printUpperCase);
