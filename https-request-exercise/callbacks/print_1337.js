var getHTML = require(`./https-functions`);

var requestOptions = {
          host: 'sytantris.github.io',
            path: '/http-examples/step6/1337.html'
};

function print1337(html) {
  var strArray = html.split("ck");

  console.log(strArray);
}

getHTML(requestOptions, print1337);

