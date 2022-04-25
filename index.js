const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {

  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP('142.186.139.110', (error, coordinates) => {
  
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const coords = { latitude: 45.451698303222656, longitude: -73.55460357666016 };

fetchISSFlyOverTimes(coords, (error, body) =>{

  if (error) {
    console.log("It didn't work!" ,error);
    return;
  }

  console.log('It worked! Returned flyover times:',body);
});