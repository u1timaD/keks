// eslint-disable-next-line no-unused-vars
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
}

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