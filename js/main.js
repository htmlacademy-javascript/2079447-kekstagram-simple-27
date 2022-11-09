import { renderPictures } from './pictures.js';
import { generatePhotos } from './data.js';
import { setPhotoListeners } from './form.js';
import { initValidation } from './validation.js';
import { initSlider } from './effects.js';


const pictures = generatePhotos();
renderPictures(pictures);
setPhotoListeners();
initValidation();
initSlider();

