const checkStringLength = (string, maxLength) => string.length < maxLength;

checkStringLength('Короткий комментарий', 20);

const getRandomArbitrary = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }

  return (Math.random() * (max - min) + min);
};
getRandomArbitrary(1, 10);
