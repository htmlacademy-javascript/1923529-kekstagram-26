import { isEscapeKey } from './utils.js';
import { comments } from './data.js';

const body = document.querySelector('body');
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.querySelector('.big-picture').remove();
  }
};

function openBigPicture(photo) {
  const main = document.querySelector('main');
  const bigPicture = document
    .querySelector('#big-picture')
    .content.querySelector('.big-picture');

  const bigPictureFragment = document.createDocumentFragment();
  const bigPictureClone = bigPicture.cloneNode(true);
  bigPictureFragment.appendChild(bigPictureClone);
  body.classList.add('modal-open');

  const bigPictureImg = bigPictureClone.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = photo.url;

  const likesCount = bigPictureClone.querySelector('.likes-count');
  likesCount.textContent = photo.likes;

  const socialCaption = bigPictureClone.querySelector('.social__caption');
  socialCaption.textContent = photo.description;

  const socialComments = bigPictureClone.querySelector('.social__comments');
  const socialComment = document
    .querySelector('#comment-item')
    .content.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();

  comments.forEach((_item, i) => {
    const commentClone = socialComment.cloneNode(true);
    commentFragment.appendChild(commentClone);

    const socialPicture = commentClone.querySelector('.social__picture');
    socialPicture.src = comments[i].avatar;
    socialPicture.alt = comments[i].name;

    const socialText = commentClone.querySelector('.social__text');
    socialText.textContent = comments[i].message;
  });

  socialComments.appendChild(commentFragment);

  const commentsCount = bigPictureClone.querySelector('.comments-count');
  const commentItem = bigPictureClone.querySelectorAll('.social__comment');
  const commentsLoader = bigPictureClone.querySelector(
    '.social__comments-loader'
  );
  commentsCount.textContent = commentItem.length;

  const socialCommentCount = bigPictureClone.querySelector(
    '.social__comment-count'
  );

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

  const bigPictureCansel = bigPictureClone.querySelector('#picture-cancel');
  bigPictureCansel.addEventListener('click', () => {
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.querySelector('.big-picture').remove();
  });

  document.addEventListener('keydown', onPopupEscKeydown);

  main.appendChild(bigPictureFragment);
}

export { openBigPicture, body };
