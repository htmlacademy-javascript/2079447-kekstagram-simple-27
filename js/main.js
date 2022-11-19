import { renderPictures } from './pictures.js';
import { setPhotoListeners } from './form.js';
import { initValidation } from './validation.js';
import { initSlider } from './effects.js';
import { getData } from './api.js';
import { showAlert } from './messages.js';

setPhotoListeners();
initValidation();
initSlider();
getData(renderPictures, showAlert);
