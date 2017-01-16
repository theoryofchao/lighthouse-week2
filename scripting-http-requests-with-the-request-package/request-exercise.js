var request = require('request');

// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    throw err; 
  })
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusCode, response.headers['content-type']);
    if(response.statusCode == '200') {
      console.log('Downloading image...');
    }
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('close', function() {
    console.log('Download Complete');
  });

       // Notes:
       // 1. `request.get` is equivalent to `request()`
       // 2. `request.on('error', callback)` handles any error
       // 3. `request.on('response, callback)` handles the response
       // 4. What is happening here?

