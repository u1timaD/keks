import {OFFER_TITLES} from './data.js';

const addForm = document.querySelector('.ad-form');
const addFormHeader = document.querySelector('.ad-form-header');
const addFormElements = document.querySelectorAll('.ad-form__element');

const mapForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

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
  const flatType = document.getElementById('type');
  const flatCost = document.getElementById('price');
  flatType.addEventListener('change', (evt) => {
    flatCost.min = flat[evt.target.value];
    flatCost.placeholder = flat[evt.target.value];
  });
};
changePrice(flatPrice);



  const timeIn = document.getElementById('timein');
  const timeOut = document.getElementById('timeout');

function mergeTime (select, value) {
  if(select.id === 'timein') {
    for(const i of timeOut) {
      if(i.value === value) {
        i.selected = true;
      }
    }
  } else {
    for(const i of timeIn) {
      if(i.value === value) {
        i.selected = true;
      }
    }
  }
}

const generateTime = function (evt) {
  mergeTime(evt.target, evt.target.value);
};

const changeTimes = function () {
  timeIn.addEventListener('change', generateTime);
  timeOut.addEventListener('change', generateTime);
};
changeTimes();














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
