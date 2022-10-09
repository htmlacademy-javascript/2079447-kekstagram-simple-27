const checkStringLength = (string, maxLength) => string.length < maxLength;

checkStringLength('Короткий комментарий', 20);


const PHOTOVISUAL = [
  'love',
  'people',
  'animals',
  'place',
  'vacation',
  'food',
  'man',
  'girl',
  'kids',
  'birds',
  'islands',
  'capitals',
  'faces',
  'pets',
  'beach',
  'sky',
  'forest',
  'nature',
];

const ADJECTIVES = [
  'adorable',
  'beautiful',
  'wonderful',
  'amazing',
  'better',
  'charming',
  'delicious',
  'Astonishing',
  'lovely',
  'excited',
  'fancy',
  'attractive',
  'excellent',
  'fabulous',
  'modern',
  'pleasant',
  'alluring',
  'delightful',
];

const GENERATE_PHOTOS = 25;

const getRandomArbitrary = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return NaN;
  }

  return (Math.random() * (max - min) + min);
};

const getRandomArrayElement = (elements) => elements[getRandomArbitrary(0, elements.length - 1)];

const createPhotos = () => ({
  id: getRandomArbitrary(1, 25),
  url: 'photos/{}.jpg',
  description: `${getRandomArrayElement(PHOTOVISUAL)} ${getRandomArrayElement(ADJECTIVES)} `,
  likes: getRandomArbitrary(15, 200),
  comments: getRandomArbitrary(0, 200),
});

const similarPhotos = Array.from({ length: GENERATE_PHOTOS }, createPhotos);

console.log(similarPhotos);
