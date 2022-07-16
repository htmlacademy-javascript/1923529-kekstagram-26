import './utils.js';
import './data.js';
import { renderPhotos } from './picture.js';
import { setFormChangeHandler, setFormCloseHandler } from './form.js';
import { closeBigPicture } from './big-picture.js';

renderPhotos();
closeBigPicture();
setFormChangeHandler();
setFormCloseHandler();
