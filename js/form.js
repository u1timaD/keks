import {OFFER_TITLES} from './data.js';

const addForm = document.querySelector('.ad-form');
const addFormHeader = document.querySelector('.ad-form-header');
const addFormElements = document.querySelectorAll('.ad-form__element');

const mapForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

const formTitle = document.querySelector('#title');
const flatType = document.querySelector('#type');
const flatCost = document.querySelector('#price');
const address = document.querySelector('#address');


const formIsDisabled = function() {
  addForm.classList.add('ad-form--disabled');
  mapForm.classList.add('.map__filters--disabled');

  addFormHeader.disabled = true;
  mapFeatures.disabled = true;

  for(const element of addFormElements) {
    element.disabled = true;
  }

  for(const element of mapFilters) {
    element.disabled = true;
  }
};

const formIsActive = function() {
  addForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('.map__filters--disabled');

  addFormHeader.disabled = false;
  mapFeatures.disabled = false;

  for(const element of addFormElements) {
    element.disabled = false;
  }

  for(const element of mapFilters) {
    element.disabled = false;
  }
};

// Единая функция для изменения состояния. Доработать, когда придёт карта
// Можно из одной функции вызывать другие в зависимости от того состояния которое надо

// const formTurnState = function () {
//   addForm.classList.toggle('ad-form--disabled');
//   mapForm.classList.toggle('.map__filters--disabled');

//   if() {
//     addFormHeader.disabled = true;
//     mapFeatures.disabled = true;

//     for(const element of addFormElements) {
//       element.disabled = true;
//     }

//     for(const element of mapFilters) {
//       element.disabled = true;
//     }
//   }
// }

// const getAddress = () => {
//   address.textContent =
// }
// address


const FLAT_PRICE = {
  bungalow : '0',
  flat : '1000',
  hotel : '3000',
  house : '5000',
  palace : '10000',
};

const changePrice = function (flat) {
  const count = flatCost.placeholder;
  flatType.addEventListener('change', (evt) => {
    flatCost.min = flat[evt.target.value];
    flatCost.placeholder = flat[evt.target.value];
  });
  return count;
};
changePrice(FLAT_PRICE);



const pristine = new Pristine(addForm, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  errorClass: 'ad-form__element--invalid', // Класс, обозначающий невалидное поле
  successClass: 'ad-form__element--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error' // Класс для элемента с текстом ошибки,
});

const rangeTitle = (value) => value.length >= 2 && value.length <= 100000;

const rangeCost = (value) => +(value) >= +(flatCost.placeholder) && value < 100000;

const textCost = (value) => (value >= 100000) ? 'Цена не больше 100000' : `цена за ночь от ${+(flatCost.placeholder)}`;

pristine.addValidator(formTitle, rangeTitle, 'введите от 30 до 100 символов');
pristine.addValidator(flatCost, rangeCost, textCost);

addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if(isValid) {
    console.log("Можно отправлять")
  } else {
    console.log('Нельзя отправлять')
  }
});



const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', ()=> {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});


// Валидация комнат и гостей
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const ROOMS_GUESTS_OPTIONS = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const validationSettlement = () => ROOMS_GUESTS_OPTIONS[roomNumber.value].includes(capacity.value);

const getRoomErrorMessage = () => 'Выбери другое количество гостей';

pristine.addValidator(capacity, validationSettlement, getRoomErrorMessage);

roomNumber.addEventListener('change', () => {
  pristine.validate(capacity);
});



// const formData = new FormData(addForm);
// for (var pair of formData.entries()) {
//   console.log(pair[0]+ ', ' + pair[1]);
// }



function submitForm() {
  const formData = new FormData(addForm);
  fetch('https://28.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Ошибка HTTP: " + response.status);
    }
  })
  .then(function(text) {
    console.log(text);
  })
  .catch(function(error) {
    console.error(error);
  })
}

// submitForm()


export {pristine};