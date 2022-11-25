const request = require('request');
const args = process.argv.slice(2); //skips the first two
const breed = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, content) => {
  
  if (error) {
    console.log('Error❗️', error);
    console.log("Please check the URL and try again.");
    return;
  } // Print the error if one occurred
  if (content.body === '[]') { //data didn't work so pre parse it works
    console.log("Error❗️ Not a valid breed 🐱. Please check the breed name and try again.");
    return;
  }
  
  const data = JSON.parse(content.body);
  console.log(data[0]["description"]); //grabs only the description
  // console.log('Typeof: ',typeof data);

});