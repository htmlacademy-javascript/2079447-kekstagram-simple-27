const checkStringLength = (string, maxLength) => string.length < maxLength;

checkStringLength('Короткий комментарий', 20);

let num = 0;
const PHOTO_VISUAL = [
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

const generatePhotoObject = () => ({
  id: num++,
  url: `photos/${getRandom(1, 25)}.jpg`,
  description: `${getRandomArrayElement(ADJECTIVES)} ${getRandomArrayElement(PHOTO_VISUAL)}`,
  likes: getRandom(15, 200),
  comments: getRandom(0, 200),
});

const differentPhotos = Array.from({ length: GENERATE_PHOTOS }, generatePhotoObject);
console.log(differentPhotos);
