import { sendData } from './api.js';
import { showAlert } from '/util.js';

const submitButton = document.querySelector('#upload-submit');
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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const onSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);

  successElement.addEventListener('click', () => successElement.remove());
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
    }
  }
  );
};
const onFailMessage = () => {
  const failTemplate = document.querySelector('#error').content.querySelector('.error');
  const failElement = failTemplate.cloneNode(true);
  document.body.append(failElement);

  failElement.addEventListener('click', () => failElement.remove());
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      failElement.remove();
    }
  }
  );
};
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    evt.preventDefault();
    if (isValid) {
      evt.preventDefault();
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          onSuccessMessage();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          onFailMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};
setUserFormSubmit();

export { initValidation };
