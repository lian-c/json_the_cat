const request = require('request');


const fetchBreedDescription = function(breedName, callback){
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,res, body) => { 

    const data = JSON.parse(body);
    const dataObj = data[0];
    const description = dataObj["description"]
    
    if (dataObj === undefined){
      return callback(dataObj);
    }
    
   callback(description)
    
  })
};



module.exports = { fetchBreedDescription };