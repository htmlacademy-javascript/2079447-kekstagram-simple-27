import { getRandom, getRandomArrayElement } from './util.js';

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
generatePhotos();

export { generatePhotos };
