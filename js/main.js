
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result =  Math.random() * (upper - lower + 1) + lower;
  return result;
};

console.log(getRandomPositiveInteger(5, 10));


const getRandomPositiveFloat = (a, b, digits) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

console.log(getRandomPositiveFloat(1, 200, 5));