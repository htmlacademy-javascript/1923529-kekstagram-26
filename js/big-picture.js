import { isEscapeKey } from './utils.js';

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
  const comments = photo.comments;

  comments.slice(0, 5).forEach((_item) => {
    const commentClone = socialComment.cloneNode(true);
    commentFragment.appendChild(commentClone);

    const socialPicture = commentClone.querySelector('.social__picture');
    socialPicture.src = _item.avatar;
    socialPicture.alt = _item.name;

    const socialText = commentClone.querySelector('.social__text');
    socialText.textContent = _item.message;
  });
  socialComments.appendChild(commentFragment);

  const commentsCount = bigPictureClone.querySelector('.comments-count');
  const commentsLoader = bigPictureClone.querySelector(
    '.social__comments-loader'
  );
  const socialCommentCount = bigPictureClone.querySelector(
    '.social__comment-count'
  );
  commentsCount.textContent = comments.length;

  let countComment = 5;

  commentsLoader.addEventListener('click', () => {
    comments.slice(countComment, countComment + 5).forEach((_item) => {
      const commentClone = socialComment.cloneNode(true);
      socialComments.appendChild(commentClone);

      const socialPicture = commentClone.querySelector('.social__picture');
      socialPicture.src = _item.avatar;
      socialPicture.alt = _item.name;

      const socialText = commentClone.querySelector('.social__text');
      socialText.textContent = _item.message;
    });

    countComment += 5;

    socialCommentCount.textContent = `${countComment} из ${comments.length} комментариев`;

    if (
      countComment <= comments.length ||
      (countComment = Math.min(countComment + 5, comments.length))
    ) {
      for (let i = 0; i < countComment; i++) {
        if (countComment === comments.length) {
          socialCommentCount.textContent = `${comments.length} из ${comments.length} комментариев`;
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
