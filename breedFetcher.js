const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
  //if something is wrong in general
  if (error !== null) {
    callback(error,null);
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined || data[0].length === 0) {
      callback(error,null);
    } else {
      callback(null,data[0]['description']);
    }
  }
});
};

module.exports = { fetchBreedDescription };

