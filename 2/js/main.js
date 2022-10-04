//Функция для проверки максимальной длины строки.
//Ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

function checkStringLength(string, maxLength) {
  return string.length < maxLength;
}

checkStringLength('Короткий комментарий', 20);
checkStringLength('Длинный комментарий', 140);

// const smallComment ="Длина комментария не должна быть менее 20 символов";
// const bigComment = "Длина комментария не должна быть менее 140 символов";

// console.log('Текст занимает ' + smallComment.length + ' кодовых значений');
// console.log('Текст занимает ' + bigComment.length + ' кодовых значений');

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//Ссылка на источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomArbitrary(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }

  return (Math.random() * (max - min) + min);
}
getRandomArbitrary(1, 10);
