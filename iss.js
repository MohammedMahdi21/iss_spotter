const request = require('request');

const fetchMyIP = function(callback) {
  const urlAPI = 'https://api.ipify.org?format=json';
  request(urlAPI, (error, response, body) => {

    // error handling
    if (error) {
      callback(error, null);
      return;
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    // pass back the IP via callback.
    const IP = JSON.parse(body).ip;
    return callback(error, IP);


  });

};

const fetchCoordsByIP = function(ip, callback) {
  const urlAPI = `https://api.ipbase.com/v2/info?apikey=NIS8AiJj0S7JZQ7XvzVPSY9hqX65by5TnRlqSb9w&ip=${ip}`;
  request(urlAPI, (error, response, body) => {

    // error handling
    if (error) {
      callback(error, null);
      return;
    }

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // pass back the relevant (lat/lng) data as an object via callback.
    const jsonBody = JSON.parse(body);
    const { latitude, longitude } = jsonBody.data.location;
    return callback(null, { latitude, longitude });
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };