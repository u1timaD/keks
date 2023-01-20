import {OFFER_TITLES, OFFER_TYPES, OFFER_CHECKINS, OFFER_CHECKOUTS, OFFER_FEATURES, OFFER_DESCRIPTIONS, OFFER_PHOTOS, OFFER_LOCATION_MIN_LAT, OFFER_LOCATION_MAX_LAT, OFFER_LOCATION_MIN_LNG,OFFER_LOCATION_MAX_LNG, OFFER_LOCATION_PRECISION} from './data.js';

import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayElements, leadingZero} from './util.js';

const makeLocation = () => ({
  lat: getRandomPositiveFloat(OFFER_LOCATION_MIN_LAT, OFFER_LOCATION_MAX_LAT, OFFER_LOCATION_PRECISION),
  lng: getRandomPositiveFloat(OFFER_LOCATION_MIN_LNG, OFFER_LOCATION_MAX_LNG, OFFER_LOCATION_PRECISION)
});

const generateId = () => {
  let currentId = 0;
  return () => {
    currentId += 1;
    return currentId;
  };
};

const generateAuthorId = generateId();

const makeAuthor = (userId) => `img/avatars/user${leadingZero(userId)}.png`;

const makeAdvert = () => ({
  author: makeAuthor(generateAuthorId()),
  offer: {
    title: getRandomArrayElement(OFFER_TITLES),
    address: Object.values(makeLocation()).join(', '),
    price: getRandomPositiveInteger(0, 100),
    type: getRandomArrayElement(OFFER_TYPES),
    rooms: getRandomPositiveInteger(0, 10),
    guests: getRandomPositiveInteger(0, 10),
    checkin: getRandomArrayElement(OFFER_CHECKINS),
    checkout: getRandomArrayElement(OFFER_CHECKOUTS),
    features: getRandomArrayElements(OFFER_FEATURES),
    description: getRandomArrayElement(OFFER_DESCRIPTIONS),
    photos: getRandomArrayElements(OFFER_PHOTOS)
  },
  location: makeLocation()

});

const makeAdverts = (count) => Array.from({length: count}, makeAdvert);


export {makeAdverts};
