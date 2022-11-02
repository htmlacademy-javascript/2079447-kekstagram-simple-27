const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text'
});

const initValidation = () => {
  uploadForm.addEventListener('submit', (evt) => {
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

};

export { initValidation };
