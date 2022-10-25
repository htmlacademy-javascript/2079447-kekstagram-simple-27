import { renderPictures } from './pictures.js';
import { generatePhotos } from './data.js';

const pictures = generatePhotos();
renderPictures(pictures);
