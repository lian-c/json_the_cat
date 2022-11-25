const request = require('request');

const fetchBreedDescription = function(breedName, callback){
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, content) => {
    const data = JSON.parse(content.body);
    const result = data[0]["description"];
    
    callback(result)
    return result;
})
};

module.exports = { fetchBreedDescription };