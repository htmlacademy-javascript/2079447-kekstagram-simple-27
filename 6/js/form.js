import { isEscapeKey } from './util.js';

const body = document.body;
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadLabel = document.querySelector('.img-upload__label');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const clearForm = () => {
  uploadFile.value = '';
};

function openForm() {
  // 1.2. Выбор изображения для загрузки осуществляется с помощью стандартного контрола загрузки файла #upload-file. После выбора изображения (изменения значения поля #upload-file), показывается форма редактирования изображения. У элемента .img-upload__overlay удаляется класс hidden, а body задаётся класс modal-open.
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  });

  clearForm();

  document.addEventListener('keydown', onFormEscKeydown);
}

//1.3 Закрытие формы редактирования изображения производится либо нажатием на кнопку #upload-cancel, либо нажатием клавиши Esc.
uploadCancel.addEventListener('click', () => {
  closeForm();
  clearForm();
});

function closeForm() {
  // Элементу .img-upload__overlay возвращается класс hidden. У элемента body удаляется класс modal-open.
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
}

imgUploadLabel.addEventListener('click', () => {
  openForm();
});


