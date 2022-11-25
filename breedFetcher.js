const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback){
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,res, body) => { 

    const data = JSON.parse(body);
    // const result = data[0]["description"];
    
    if (error){
      return error;
    }
    
    return callback(console.log(data))
    
  })
};

fetchBreedDescription(breedName, (error, desc) => {
console.log(desc)
  // if (error) {
  //   console.log('Error fetch details:', error);
  // } else {
  //   console.log(desc);
  // }
});

module.exports = { fetchBreedDescription };