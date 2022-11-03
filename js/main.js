import { renderPictures } from './pictures.js';
import { generatePhotos } from './data.js';
import { setPhotoListeners } from './form.js';
import { initValidation } from './validation.js';
import { resetScale } from './scale.js';

const pictures = generatePhotos();
renderPictures(pictures);
setPhotoListeners();
initValidation();
resetScale();
