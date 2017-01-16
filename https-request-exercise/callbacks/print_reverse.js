var getHTML = require(`./https-functions`);

var requestOptions = {
          host: 'sytantris.github.io',
            path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {

  console.log(html.split("").reverse().join(""));          /* Write your code here! */

}

getHTML(requestOptions, printReverse);

