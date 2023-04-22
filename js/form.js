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


const flatPrice = {
  bungalow : '0',
  flat : '1000',
  hotel : '3000',
  house : '5000',
  palace : '10000',
};

const changePrice = function (flat) {
  let count = flatCost.placeholder;
  flatType.addEventListener('change', (evt) => {
    flatCost.min = flat[evt.target.value];
    flatCost.placeholder = flat[evt.target.value];
  });
  return count;
};
changePrice(flatPrice);

const pristine = new Pristine(addForm, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  errorClass: 'ad-form__element--invalid', // Класс, обозначающий невалидное поле
  successClass: 'ad-form__element--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error' // Класс для элемента с текстом ошибки,
});

function rangeTitle (value) {
  return value.length >= 2 && value.length <= 100000;
}

function rangeCost (value) {
  return +(value) >= +(flatCost.placeholder) && value < 100000;
}

function textCost (value) {
  if(value > 100000) {
    return 'Цена не больше 100000';
  } else {
    return `цена за ночь от ${+(flatCost.placeholder)}`;
  }
}

pristine.addValidator(formTitle, rangeTitle, 'введите от 30 до 100 символов');
pristine.addValidator(flatCost, rangeCost, textCost);


addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  // if(isValid) {
  //   console.log("Можно отправлять")
  // } else {
  //   console.log('Нельзя отправлять')
  // }
});





const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');

timeIn.addEventListener('change', ()=> {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

// ПРЕДЫДУЩИЙ МОЙ ВАРИАНТ ИСПОЛНЕНИЯ
// function mergeTime (select, value) {
//   if(select.id === 'timein') {
//     for(const i of timeOut) {
//       if(i.value === value) {
//         i.selected = true;
//       }
//     }
//   } else {
//     for(const i of timeIn) {
//       if(i.value === value) {
//         i.selected = true;
//       }
//     }
//   }
// }

// const generateTime = function (evt) {
//   mergeTime(evt.target, evt.target.value);
// };

// const changeTimes = function () {
//   timeIn.addEventListener('change', generateTime);
//   timeOut.addEventListener('change', generateTime);
// };
// changeTimes();




const roomNum = document.querySelector('#room_number');
const capacityNum = document.querySelector('#capacity');

const roomElem = roomNum.options;
// console.log(roomNum[roomElem.selectedIndex])

roomNum.addEventListener('change', () => {
  if(roomNum.value >= capacityNum.value) {
    console.log(`отличаная компната для ${roomNum.value} человека или меньше`)
  } else {
    console.log('Слишком много народу для такой комнатушки')
  }
})


capacityNum.addEventListener('change', () => {
  if(capacityNum.value <= roomNum.value) {
    console.log(`для ${capacityNum.value} человек эта комната в самый раз`)
  } else {
    console.log(`вы не поместитесь в ${roomNum.value} комнате`)
  }


})




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
