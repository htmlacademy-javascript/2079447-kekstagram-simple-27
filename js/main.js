import { renderPictures } from './pictures.js';
import { generatePhotos } from './data.js';
import './form.js';
import './validation.js';

const pictures = generatePhotos();
renderPictures(pictures);
