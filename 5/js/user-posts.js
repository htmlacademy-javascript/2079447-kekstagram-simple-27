import { generatePhotos } from './data.js';

//  Контейнер для изображений от других пользователей
const picturesContainer = document.querySelector('.pictures');

//Поиск шаблона по id picture, получение его содержимого из элемента с классом .picture
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// pictureTemplate();

const pictures = generatePhotos();

const pictureFragment = document.createDocumentFragment();

pictures.forEach(({ url, likes, comments }) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = url;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments;
  pictureFragment.appendChild(newPicture);
});

picturesContainer.appendChild(pictureFragment);
