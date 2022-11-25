const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, res, body) => {
    if (error) {
      return callback("error", null);
    }
    const data = JSON.parse(body);
    const dataObj = data[0];
    // const description = dataObj["description"] cannot read property

    if (dataObj === undefined) {
      return callback("Invalid breed", null);
    } else {
      return callback(null, dataObj["description"]);
    }
  });
};



module.exports = { fetchBreedDescription };