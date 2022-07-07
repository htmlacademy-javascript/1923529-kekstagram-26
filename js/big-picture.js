import { photos } from './data.js';

const bigPicture = document.querySelector('.big-picture');

const socialCommentCount = document.querySelector('.social__comment-count');
socialCommentCount.classList.add('hidden');

const commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('hidden');

const bigPictureCansel = document.querySelector('#picture-cancel');

function openBigPicture(i) {
  bigPicture.classList.remove('hidden');

  const bigPictureImg = document.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = photos[i].url;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = photos[i].likes;

  const socialComments = document.querySelector('.social__comments');

  const socialPicture = socialComments.querySelectorAll('.social__picture');

  socialPicture.forEach((_item) => {
    _item.src = photos[i].comments.avatar;
    _item.alt = photos[i].comments.name;
  });

  const socialText = socialComments.querySelectorAll('.social__text');
  socialText.forEach((_item) => {
    _item.textContent = photos[i].comments.message;
  });

  const socialCaption = document.querySelector('.social__caption');
  socialCaption.textContent = photos[i].description;

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
}

export { openBigPicture };
