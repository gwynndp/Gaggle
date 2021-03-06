import GOOGLE_API_KEY from './config';

export const categories = ['Restaurants', 'Museums', 'Cafes', 'Shopping', 'Bars', 'Movies', 'Games', 'Recreation', 'Art', 'Music', 'Shows', 'Theaters', 'Skydiving'];

export const getResultsFromKeyword = (locationArray, keyword, radius) => {
  const latitude = locationArray[0];
  const longitude = locationArray[1];
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&key=${GOOGLE_API_KEY}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(error => reject(error));
  });
};

export const getPlaceDetails = (placeId) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => resolve(responseJson))
      .catch(error => reject(error));
  });
};

export const getPlacePhoto = (photoreference) => {
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoreference}&key=${GOOGLE_API_KEY}`;

  return new Promise((resolve, reject) => {
    fetch(url)
       .then((response) => { resolve(response.url); })
       .catch(error => reject(error));
  });
};

