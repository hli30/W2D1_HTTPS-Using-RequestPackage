var request = require("request");
var fs = require("fs");

var uriString = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(uriString)
    .on("error", function(err) {
        console.log(err);
    })
    .on("response", function(response) {
        console.log("Response:", response, "\nStatus Code:", response.statusCode,
        "\nContent-type:", response.headers["content-type"]);
        console.log("Downloading Image");
    })
    .on("end", function() {
        console.log("Download Completed!");
    })
    .pipe(fs.createWriteStream("./future.jpg"));