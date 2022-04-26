const request = require('request-promise-native');

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const myIP = JSON.parse(body).ip;
  return request(`https://api.ipbase.com/v2/info?apikey=NIS8AiJj0S7JZQ7XvzVPSY9hqX65by5TnRlqSb9w&ip=${myIP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const jsonBody = JSON.parse(body);
  const { latitude, longitude } = jsonBody.data.location;
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};



module.exports = { nextISSTimesForMyLocation };