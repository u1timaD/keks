
const form = document.querySelector('.ad-form');
const title = document.getElementById('title');
const typeHome = document.getElementById('type');
const priceNight = document.getElementById('price');
const timeIn = document.getElementById('timein');
const timeOut = document.getElementById('timeout');
const roomsNumber = document.getElementById('room_number');
const capacitys = document.getElementById('capacity');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  errorClass: 'ad-form__element--invalid', // Класс, обозначающий невалидное поле
  successClass: 'ad-form__element--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'ad-form__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'span', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error' // Класс для элемента с текстом ошибки,
});

const TYPE_COSTS = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};



function validateTitle (value) {
  return value.length >= 2 && value.length <= 100;
}

pristine.addValidator(title, validateTitle, 'от 2 до 100 символов');




function type (value) {

}

pristine.addValidator(type,)

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();

});


// typeHome.addEventListener('change', () => {
//   priceNight.min =  TYPE_COSTS[typeHome.value];
// });

// timeIn.addEventListener('change', (evt) => {
//   timeOut.value = evt.target.value;
// });

// timeOut.addEventListener('change', (evt) => {
//   timeIn.value = evt.target.value;
// });

// roomsNumber.addEventListener('change', (evt) => {
//   if(evt.target.value === '1') {
//     capacitys.value = evt.target.value;
//     capacitys.disabled = true;
//   };
//   console.log(evt.target.value)
  // if(evt.target.value !== '100') {
  //   capacity.value = evt.target.value;
  // }
  // else {
  //   capacity.value = '0';

    // capacity.disabled = true;
  // });
  // for (let capacity of capacitys) {
  //   if (evt.target.value !== '100') {}
  //   else {
  //     capacity.value = '0';
  //     // capacity.disabled = true;

  //   }

  //   console.log(capacity);
  // }

// });


