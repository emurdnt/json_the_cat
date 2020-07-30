const request = require('request');
const fs = require('fs');
const { Console } = require('console');

const breed = process.argv.slice(2).join('');
// const apiCall = ;
//red through input
//console.log(breed);
request('https://api.hecatapi.com/v1/breeds/search?q='+breed, (error, response, body) => {

  //if something is wrong in general
  if (error.statusCode === undefined) {
    console.log(error['errno']);
  } else{
    const data = JSON.parse(body);
    if ( data[0] === undefined || data[0].length === 0) {
      console.log("Breed not found");
    } else {
      console.log(data[0]['description']);
    }
  }
 
 
  //check both conditions because not having the breed will return null but having a syntax error in the url string will return an error value so I'm checking the response


});