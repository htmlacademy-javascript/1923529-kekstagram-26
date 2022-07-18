import { isEscapeKey } from './utils.js';
import { photos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCansel = document.querySelector('#picture-cancel');
const body = document.querySelector('body');
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

function closeBigPicture() {
  bigPictureCansel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
}

function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');

  const bigPictureImg = document.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = photo.url;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = photo.likes;

  const socialCaption = document.querySelector('.social__caption');
  socialCaption.textContent = photo.description;

  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
}

function renderComments() {
  const socialComments = document.querySelector('.social__comments');
  const socialComment = document
    .querySelector('#comment-item')
    .content.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();

  photos.forEach((_item, i) => {
    const commentItem = socialComment.cloneNode(true);
    commentFragment.appendChild(commentItem);

    const socialPicture = commentItem.querySelector('.social__picture');
    socialPicture.src = photos[i].comments.avatar;
    socialPicture.alt = photos[i].comments.name;

    const socialText = commentItem.querySelector('.social__text');
    socialText.textContent = photos[i].comments.message;
  });

  socialComments.appendChild(commentFragment);
}

function downloadMoreComments() {
  const commentsCount = document.querySelector('.comments-count');
  const commentItem = document.querySelectorAll('.social__comment');
  const commentsLoader = document.querySelector('.social__comments-loader');
  commentsCount.textContent = commentItem.length;

  const socialCommentCount = document.querySelector('.social__comment-count');

  for (let i = 5; i < commentItem.length; i++) {
    commentItem[i].style.display = 'none';
  }

  let countComment = 5;
  commentsLoader.addEventListener('click', () => {
    countComment += 5;
    socialCommentCount.textContent = `${countComment} из ${commentItem.length} комментариев`;
    if (countComment <= commentItem.length) {
      for (let i = 0; i < countComment; i++) {
        commentItem[i].style.display = 'block';
        if (countComment === commentItem.length) {
          commentsLoader.classList.add('hidden');
        }
      }
    }
  });
}

export {
  openBigPicture,
  closeBigPicture,
  body,
  renderComments,
  downloadMoreComments,
};
