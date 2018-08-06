var https = require('https');
var string = "";

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding("UTF-8");
    
    response.on("data", function(chunk) {
      string += chunk;
      console.log(string);
    });

    response.on("end", function() {
      console.log("Response stream ended");
    });
  }) 
}


getAndPrintHTML()
