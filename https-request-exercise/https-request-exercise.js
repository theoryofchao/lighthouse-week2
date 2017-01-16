var https = require(`https`);

var getAndPrintHtmlChunks = function() {
  var requestOptions = {
    host: `sytantris.github.io`,
    path: `/http-examples/step1.html`
  };

  https.get(requestOptions, (response) => {
    response.setEncoding(`utf8`);
    response.on(`data`, (data) => {
      console.log(data.toString(),`\n`);
    });
  });
};

getAndPrintHtmlChunks();

/*var requestOptions = {
  host: `example.com`,
  path: `/`
};

https.get( requestOptions, (response) => {
  response.setEncoding(`utf8`);

  response.on(`data`, (data) => {
    console.log(`Chunk Received. Length: ${data.length}`);
  });

  response.on(`end`, () => {
    console.log(`Response stream complete.`);
  });

});*/
