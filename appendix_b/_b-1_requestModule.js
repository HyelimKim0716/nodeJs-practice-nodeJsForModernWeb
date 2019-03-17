const request = require('request');

request('http://google.com', function (error, response, body) {
    console.log(body);
});