const bigPicture = document.querySelector('.big-picture');

const socialCommentCount = document.querySelector('.social__comment-count');
socialCommentCount.classList.add('hidden');

const commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('hidden');

const bigPictureCansel = document.querySelector('#picture-cancel');

function openBigPicture(photos) {
  bigPicture.classList.remove('hidden');

  const bigPictureImg = document.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = photos.url;

  const likesCount = document.querySelector('.likes-count');
  likesCount.textContent = photos.likes;

  const socialComments = document.querySelector('.social__comments');

  const socialPicture = socialComments.querySelectorAll('.social__picture');

  socialPicture.forEach((_item) => {
    _item.src = photos.comments.avatar;
    _item.alt = photos.comments.name;
  });

  const socialText = socialComments.querySelectorAll('.social__text');
  socialText.forEach((_item) => {
    _item.textContent = photos.comments.message;
  });

  const socialCaption = document.querySelector('.social__caption');
  socialCaption.textContent = photos.description;

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
