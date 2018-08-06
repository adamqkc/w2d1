var https = require('https');
var string = "";

function getAndPrintHTML(options) {

  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding("UTF-8");

    response.on("data", function (chunk) {
      string += chunk;
      console.log(string);
    });

    response.on("end", function () {
      console.log("Response stream ended");
    });
  }) 
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);