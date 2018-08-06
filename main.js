var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding("UTF-8");
    
    response.on("data", function(chunk) {
      console.log(`--chunk-- ${chunk.length}`);
      console.log(chunk);
    });

    response.on("end", function() {
      console.log("Response stream ended");
    });
  }) 
}

getAndPrintHTMLChunks()
