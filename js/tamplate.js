import { makeAdverts } from './mocks.js';
import { OFFERS_COUNT } from './data.js';
import { getRandomPositiveInteger } from './util.js';

const typeHouses = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец',
};

// Всё заменить на одну функцию, которая принимает на вход массив объектов
// и выбирает перый, если первый одинаковый всегда, выбирает любой из массива

const advertice = makeAdverts(OFFERS_COUNT);

const mapCanvas = document.querySelector('.map__canvas');
const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');
const fragment = document.createDocumentFragment();
console.log(advertice[2])
// let avatar = document.querySelector('.popup__avatar');
// const TITLE = document.querySelector('.popup__title');
// const ADDRESS = document.querySelector('.popup__text--address');
// const PRICE = document.querySelector('.popup__text--price');
// const TYPE = document.querySelector('.popup__type');
// const CAPACITY = document.querySelector('.popup__text--capacity');
// const TIME = document.querySelector('.popup__text--time');
// const FEATURE = document.querySelector('.popup__features');
// const DESCRIPTION = document.querySelector('.popup__description');
// const PHOTO = document.querySelector('.popup__photos');

for (let i=0; i<1; i++) {
  const element = template.cloneNode(true);
  const link = advertice[2]['offer']; //2 - второй элемент массива объектов

  element.querySelector('.popup__avatar').src = advertice[2]['author']; // 2 - фторая фотка
  element.querySelector('.popup__title').textContent = link['title'];
  element.querySelector('.popup__text--address').textContent = link['address'];
  element.querySelector('.popup__text--price').textContent = `${link['price']} ₽/ночь`;
  element.querySelector('.popup__type').textContent = typeHouses[link['type']];
  element.querySelector('.popup__text--capacity').textContent = `${link['rooms']} комнаты для ${link['guests']} гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${link['checkin']}, выезд до ${link['checkout']}`;

  const feature = element.querySelectorAll('.popup__feature');
  feature.forEach((elem) => {
    const hasFeature = link['features'].some((item) => elem.classList.contains('popup__feature--' + item));

    if(!hasFeature) {
      elem.remove();
    }
  });

  element.querySelector('.popup__description').textContent = link['description'];
  if(link['photos'][0] === undefined) {
    element.querySelector('.popup__photo').remove();
    element.querySelector('.popup__photos').insertAdjacentHTML('afterbegin', '<p style="color: red">Упс ... Фотки нет</p>');
  } else{
    element.querySelector('.popup__photo').src = link['photos'][0];
  }

  fragment.appendChild(element);
}

// mapCanvas.appendChild(fragment);

// console.log(makeAdverts(10));
