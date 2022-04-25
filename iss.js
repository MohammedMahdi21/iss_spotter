const request = require('request');


const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  request(url, (error, response, body) => {

    if (error) {
      return callback(error);
    } else {
      return callback(body);
    }

  });


};
module.exports = { fetchMyIP };