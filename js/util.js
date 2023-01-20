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

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


// * возвращает случайное булевое значение
const getRandomBoolean = () => Math.random() > 0.5;

// возвращает случайные элементы массива
const getRandomArrayElements = (elements) => elements.filter(() => getRandomBoolean());


// * функция возвращает число с лидирующим нулём если число меньше десяти
// * функция возвращает строку
const leadingZero = (number) => (number < 10) ? `0${number}` : String(number);

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArrayElements, leadingZero};




// const numberOfImage = [];

// const getArrayImages = (photo) => {
//   if (numberOfImage.length === 0) {
//     for (let i = 1; i <= photo; i++) {
//       if(i < 10) {
//         i = `0${i}`;
//       }
//       numberOfImage.push(String(i));
//     }
//   }
//   numberOfImage.sort(()=>Math.random()-0.5)
//   return numberOfImage.shift(1);
// };

// const getRandomArrayElement = (element) => element[getRandomPositiveInteger(0, element.length - 1)];

// const getRandomArrayLengthElement =  (element) => {
//   element.sort(()=>Math.random()-0.5);
//   return element.slice(getRandomPositiveInteger(0, element.length - 1));
// };


// export {getRandomPositiveInteger, getRandomPositiveFloat, getArrayImages, getRandomArrayElement, getRandomArrayLengthElement};