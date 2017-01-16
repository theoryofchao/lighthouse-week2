var requestOptions = {
    host: `sytantris.github.io`,
    path: `/http-examples/step2.html`
  };

var getAndPrintHTMLOptions = function (options) {
  https.get(options, (response) => {
    response.setEncoding(`utf8`);
    var responseString = "";
    response.on(`data`, (data) => {
      responseString+=data.toString();
    });

    response.on(`end`, () => {
      console.log(responseString);
    });
  });
};

getAndPrintHTML(requestOptions);