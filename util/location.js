const axios = require('axios');

const HttpError = require('../models/http-error');

// const API_KEY = 'AIzaSyDgLmMpKCzveJf1_yuA0fUzzhy0WRChvZA';

// const API_KEY = 'AIzaSyAbmytcr6OD8_--sDcLaUGogq59ymx0ESg'

const API_KEY = 'AIzaSyDWF4wuSbv098pUwfroeP_VxG7EkDmsmOA';

async function getCoordsForAddress(address) {
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // };
  console.log(address);
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  
  console.log(response.data);

  const data = response.data;

  // console.log(data.status);

  if (!data || data.status === 'ZERO_RESULTS') {
    // console.log('throw error')
    const error = new HttpError(
      'Could not find location for the specified address.',
      422
    );
    console.log('throw error');
    throw error;
  }
  console.log("here");
  console.log('HERE' + data.results[0].geometry.location);   
  const coordinates = data.results[0].geometry.location;
  console.log(coordinates);
  return coordinates;
}

module.exports = getCoordsForAddress;
