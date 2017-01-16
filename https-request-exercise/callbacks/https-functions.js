var https = require(`https`);

var requestOptions = {
    host: `sytantris.github.io`,
    path: `/http-examples/step2.html`
  };

var getAndPrintHTML = function (options, callback) {
  https.get(options, (response) => {
    response.setEncoding(`utf8`);
    var responseString = "";
    response.on(`data`, (data) => {
      responseString+=data.toString();
    });

    response.on(`end`, () => {
      callback(responseString);
    });
  });
};

module.exports = getAndPrintHTML;
