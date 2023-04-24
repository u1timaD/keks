const OFFERS_COUNT = 10;
const OFFER_TITLES = ['Для бабушек и дедушек', 'Для молодых и активных','Лучшая квартира'];
const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const OFFER_CHECKINS = ['12:00', '13:00', '14:00'];
const OFFER_CHECKOUTS = ['12:00', '13:00', '14:00'];
const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_DESCRIPTIONS = ['Просторная', 'Для студентов', 'Умный дом', 'С детьми и детьми собак'];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const OFFER_LOCATION_MIN_LAT = 35.65;
const OFFER_LOCATION_MAX_LAT = 35.7;
const OFFER_LOCATION_MIN_LNG = 139.7;
const OFFER_LOCATION_MAX_LNG = 139.8;
const OFFER_LOCATION_PRECISION = 5;

const FLAT_COST_MAX = 100000;
const START_PRICE_VALUE = 3000;

const FLAT_PRICE = {
  bungalow : '0',
  flat : '1000',
  hotel : '3000',
  house : '5000',
  palace : '10000',
};

export {OFFERS_COUNT, OFFER_TITLES, OFFER_TYPES, OFFER_CHECKINS, OFFER_CHECKOUTS, OFFER_FEATURES, OFFER_DESCRIPTIONS, OFFER_PHOTOS, OFFER_LOCATION_MIN_LAT, OFFER_LOCATION_MAX_LAT, OFFER_LOCATION_MIN_LNG, OFFER_LOCATION_MAX_LNG, OFFER_LOCATION_PRECISION, FLAT_COST_MAX, START_PRICE_VALUE, FLAT_PRICE};
