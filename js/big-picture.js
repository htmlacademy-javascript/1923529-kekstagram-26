import { photos } from './data.js';

function openBigPicture() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');

  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');

  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');

  const body = document.querySelector('body');
  body.classList.add('modal-open');

  const bigPictureCansel = document.querySelector('#picture-cancel');
  bigPictureCansel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
    }
  });

  photos.forEach((_item, i) => {
    const bigPictureImg = document.querySelector('.big-picture__img');
    bigPictureImg.querySelector('img').src = photos[i].url;

    const likesCount = document.querySelector('.likes-count');
    likesCount.textContent = photos[i].likes;

    const commentsCount = document.querySelector('.comments-count');
    commentsCount.textContent = photos[i].id;

    const socialComments = document.querySelector('.social__comments');

    const socialPicture = socialComments.querySelector('.social__picture');
    socialPicture.src = photos[i].comments.avatar;
    socialPicture.alt = photos[i].comments.name;

    const socialText = socialComments.querySelector('.social__text');
    socialText.textContent = photos[i].comments.message;

    const socialCaption = document.querySelector('.social__caption');
    socialCaption.textContent = photos[i].description;
  });
}

export { openBigPicture };
