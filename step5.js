var https = require('https');
var string = '';

module.exports = function getHTML(options, callback) {
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
};