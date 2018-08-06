var https = require('https');
var string = "";

function getHTML(options, callback) {

  /* Add your code here */
  https.get(options, function (response) {
    response.setEncoding("UTF-8");

    response.on("data", function (chunk) {
      string += chunk;
      callback(string);
    });

    response.on("end", function () {
      console.log("Response stream ended");
    });
  });

}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);