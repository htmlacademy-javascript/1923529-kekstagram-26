import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
socialCommentCount.classList.add('hidden');

const commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('hidden');

const bigPictureCansel = document.querySelector('#picture-cancel');
const body = document.querySelector('body');
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

function closeBigPicture() {
  bigPictureCansel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  document.removeEventListener('keydown', onPopupEscKeydown);
}

function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');

  const bigPictureImg = document.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = photo.url;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = photo.likes;

  const socialComments = document.querySelector('.social__comments');
  const socialPicture = socialComments.querySelectorAll('.social__picture');

  socialPicture.forEach((_item) => {
    _item.src = photo.comments.avatar;
    _item.alt = photo.comments.name;
  });

  const socialText = socialComments.querySelectorAll('.social__text');
  socialText.forEach((_item) => {
    _item.textContent = photo.comments.message;
  });

  const socialCaption = document.querySelector('.social__caption');
  socialCaption.textContent = photo.description;

  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}
export { openBigPicture, closeBigPicture, body };
