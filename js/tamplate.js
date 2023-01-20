import { makeAdverts } from './mocks.js';


const typeHouses = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};


let mapCanvas = document.querySelector('.map__canvas');
let templateCard = document.querySelector('#card').content;
let popup = templateCard.querySelector('.popup');

let clonePopup = popup.cloneNode(true);

let offerName = makeAdverts(1)[0].offer;

let img = clonePopup.querySelector('img');
img.src = makeAdverts(1)[0].author;
let popupTitle = clonePopup.querySelector('.popup__title');
popupTitle.textContent = offerName.title;

let popupAddress = clonePopup.querySelector('.popup__text--address');
popupAddress.textContent = offerName.address;
let popupPrice = clonePopup.querySelector('.popup__text--price');
popupPrice.textContent = `${offerName.price} ₽/ночь`;

let popupType = clonePopup.querySelector('.popup__type');
popupType.textContent = typeHouses[offerName.type];

let popupСapacity = clonePopup.querySelector('.popup__text--capacity');
popupСapacity.textContent = `${offerName.rooms} комнаты для ${offerName.guests} гостей`;

let popupTime = clonePopup.querySelector('.popup__text--time');
popupTime.textContent = `Заезд после ${offerName.checkin}, выезд до ${offerName.checkout}`;

// Вывести удобства
let popupFeaturesList = clonePopup.querySelector('.popup__features');
let popupFeatures = popupFeaturesList.querySelectorAll('.popup__feature');

popupFeatures.forEach((feature) => {
  let featuresTehnics = offerName.features;

  const nessesary = featuresTehnics.some((technic) => feature.classList.contains('popup__feature--' + technic));

  if(!nessesary) {
    feature.remove();
  }
});

// console.log(popupFeature);

let popupDescription = clonePopup.querySelector('.popup__description');
popupDescription.textContent = offerName.description;

let popupPhoto = clonePopup.querySelector('.popup__photo');
popupPhoto.src = offerName.photos;



let newElement = mapCanvas.appendChild(clonePopup);

// console.log(img.src);
// console.log(popupTitle);

// console.log(makeAdverts(1)[0].author);

// console.log(makeAdverts(10));
