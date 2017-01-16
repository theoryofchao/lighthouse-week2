var getAndPrintHTML = function () {
  var requestOptions = {
    host: `sytantris.github.io`,
    path: `/http-examples/step2.html`
  };

  https.get(requestOptions, (response) => {
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

getAndPrintHTML();