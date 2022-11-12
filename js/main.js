import { renderPictures } from './pictures.js';
import { generatePhotos } from './data.js';
import { setPhotoListeners } from './form.js';
import { initValidation } from './validation.js';
import { initSlider } from './effects.js';
import { getData } from './api.js';
import { setUserFormSubmit } from '/validation.js';
//import { showAlert } from './form-validation';

const pictures = generatePhotos();
renderPictures(pictures);
setPhotoListeners();
initValidation();
initSlider();
getData(renderPictures);
setUserFormSubmit();
