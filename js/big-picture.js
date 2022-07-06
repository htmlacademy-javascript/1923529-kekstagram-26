import { photos } from './data.js';
import './picture.js';

const bigPicture = document.querySelector('.big-picture');

const picture = document.querySelectorAll('.picture');

const socialCommentCount = document.querySelector('.social__comment-count');
socialCommentCount.classList.add('hidden');

const commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('hidden');

const bigPictureCansel = document.querySelector('#picture-cancel');

for (let i = 0; i < picture.length; i++) {
  openBigPicture(picture[i], photos[i]);
}

function openBigPicture(pic, photo) {
  pic.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    const bigPictureImg = document.querySelector('.big-picture__img');
    bigPictureImg.querySelector('img').src = photo.url;

    const likesCount = document.querySelector('.likes-count');
    likesCount.textContent = photo.likes;

    const socialComments = document.querySelector('.social__comments');

    const socialPicture = socialComments.querySelectorAll('.social__picture');
    socialPicture.forEach((i) => {
      i.src = photo.comments.avatar;
      i.alt = photo.comments.name;
    });

    const socialText = socialComments.querySelectorAll('.social__text');
    socialText.forEach((i) => {
      i.textContent = photo.comments.message;
    });

    const socialCaption = document.querySelector('.social__caption');
    socialCaption.textContent = photo.description;

    const body = document.querySelector('body');
    body.classList.add('modal-open');

    bigPictureCansel.addEventListener('click', () => {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        bigPicture.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  });
}

export { openBigPicture };
