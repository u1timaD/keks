import {FLAT_COST_MAX, START_PRICE_VALUE, FLAT_PRICE} from './data.js';

const sliderBox = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const type = document.querySelector('#type');

price.value = START_PRICE_VALUE;

noUiSlider.create(sliderBox, {
  range: {
    min: 0,
    max: FLAT_COST_MAX,
  },
  start: price.value,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});


sliderBox.noUiSlider.on('update', () => {
  price.value = sliderBox.noUiSlider.get();
});

type.addEventListener('change', (evt) => {

  if (evt.target.value) {
    sliderBox.noUiSlider.updateOptions({
      range: {
        min: Number(FLAT_PRICE[evt.target.value]),
        max: FLAT_COST_MAX,
      },
      start: Number(FLAT_PRICE[evt.target.value]),
      step: 1
    });

  } else {
    sliderBox.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1
    });
  }
});


