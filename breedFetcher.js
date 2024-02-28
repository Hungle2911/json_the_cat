const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const arg = process.argv.slice(2);
const fetchBreedDescription = function(dogName) {
  request(url + dogName, (err, response, body) => {
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    console.log('body:', data[0].description); // Print the HTML for the Google homepage.
  });
};
fetchBreedDescription(arg);