import { checkStringLength } from './util.js';

const uploadText = document.querySelector('.img-upload__text');

const pristine = new Pristine(uploadText, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});


uploadText.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line no-console
    console.log('Можно отправлять');
  } else {
    // eslint-disable-next-line no-console
    console.log('Форма невалидна');
  }
});

export { checkStringLength };
