// Рандомное число
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Рандомный диапазон чисел
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getFixedNumberPoint = (num, point = 5) => num.toFixed(point);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// * возвращает случайное булевое значение
const getRandomBoolean = () => Math.random() > 0.5;

// возвращает случайные элементы массива
const getRandomArrayElements = (elements) => elements.filter(() => getRandomBoolean());


// * функция возвращает число с лидирующим нулём если число меньше десяти
// * функция возвращает строку
const leadingZero = (number) => (number < 10) ? `0${number}` : String(number);

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayElements, leadingZero, getFixedNumberPoint};

