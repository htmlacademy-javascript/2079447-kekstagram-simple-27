const checkStringLength = (string, maxLength) => string.length < maxLength;

checkStringLength('Короткий комментарий', 20);

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

const generatePhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: `${getRandomArrayElement(ADJECTIVES)} ${getRandomArrayElement(PHOTO_VISUAL)}`,
  likes: getRandom(15, 200),
  comments: getRandom(0, 200),
});

const generatePhotos = () => {
  const photos = [];

  for (let i = 0; i < GENERATE_PHOTOS; i++) {
    const photo = generatePhoto(i + 1);
    photos.push(photo);
  }
  return photos;
};
console.log(generatePhotos);
