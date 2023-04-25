import {FLAT_COST_MAX, START_PRICE_VALUE, FLAT_PRICE} from './data.js';
import {pristine} from './form.js';

const sliderPrice = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const type = document.querySelector('#type');

noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: FLAT_COST_MAX,
  },
  start: price.placeholder,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const resetSlider = () => {
  sliderPrice.noUiSlider.reset();
};

// Доделать слайдер, чтобы выводил 0
// реализовать всё про карту
sliderPrice.noUiSlider.on('slide', () => {
  price.value = sliderPrice.noUiSlider.get();
  pristine.validate(price);
});

type.addEventListener('change', (evt) => {
  if (evt.target.value) {
    sliderPrice.noUiSlider.updateOptions({
      range: {
        min: Number(FLAT_PRICE[evt.target.value]),
        max: FLAT_COST_MAX,
      },
      start: Number(FLAT_PRICE[evt.target.value]),
    });
  }
});


export {resetSlider};

