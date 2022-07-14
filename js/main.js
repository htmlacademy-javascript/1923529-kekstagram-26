import './utils.js';
import './data.js';
import { renderPhotos } from './picture.js';
import { openFormOverlay, closeFormOverlay } from './form.js';
import { closeBigPicture } from './big-picture.js';

renderPhotos();
closeBigPicture();
openFormOverlay();
closeFormOverlay();
