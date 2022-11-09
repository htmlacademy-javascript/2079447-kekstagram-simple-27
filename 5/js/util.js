const checkStringLength = (string, maxLength) => string.length < maxLength;

checkStringLength('Короткий комментарий', 20);

const getRandom = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

export { getRandom, getRandomArrayElement };