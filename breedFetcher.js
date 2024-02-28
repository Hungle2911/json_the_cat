const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const fetchBreedDescription = function(dogName, callback) {
  request(url + dogName, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const description = data[0].description;
        callback(null, description);
      } else {
        callback('Breed not found', null);
      }
    }
  });
};
module.exports = { fetchBreedDescription };

