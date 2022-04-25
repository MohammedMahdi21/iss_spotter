const request = require('request');

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  request(url, (error, response, body) => {

    if (error) {
      return callback(error, null);
    } else if (response.statusCode !== 200){
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(error(msg), null);
    } else {
      const IP = JSON.parse(body).ip;
      return callback(error, IP);
    }

  });

};
module.exports = { fetchMyIP };