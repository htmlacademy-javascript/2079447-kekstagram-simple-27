const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const { url, likes, comments } = picture;

    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments;
    pictureFragment.appendChild(newPicture);
  });

  picturesContainer.appendChild(pictureFragment);

};

export { renderPictures };
