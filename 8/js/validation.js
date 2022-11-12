import { showSuccessMessage, showErrorMessage } from './form-validation.js';
import { sendData } from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const submitButtonElement = document.querySelector('.img-upload__submit');

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
const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};
const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  document.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess(showSuccessMessage());
          unblockSubmitButton();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};
export { initValidation, setUserFormSubmit };
