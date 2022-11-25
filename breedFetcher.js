const request = require('request');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q='


request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, content) => {
  
if(error){
console.log('error:', error);} // Print the error if one occurred
  const data = JSON.parse(content.body)
  console.log(data[0]); 
  console.log('Typeof: ',typeof data); 
});