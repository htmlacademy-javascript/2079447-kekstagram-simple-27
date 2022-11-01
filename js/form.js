import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const clearForm = () => {
  uploadFile.value = '';
};

const onCloseButtonClick = () => closeForm();

const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

function closeForm() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  clearForm();
}

const setPhotoListeners = () => {

  uploadFile.addEventListener('change', () => {
    openForm();
  });

  uploadCancel.addEventListener('click', onCloseButtonClick);
};

export { setPhotoListeners };
