import { photos } from './data.js';
import { openBigPicture } from './big-picture.js';

function renderPhotos() {
  const pictures = document.querySelector('.pictures');

  const picture = document
    .querySelector('#picture')
    .content.querySelector('.picture');

  const pictureFragment = document.createDocumentFragment();

  photos.forEach((_item, i) => {
    const pictureLink = picture.cloneNode(true);
    pictureFragment.appendChild(pictureLink);

    const pictureSrc = pictureLink.querySelector('.picture__img');
    pictureSrc.src = photos[i].url;

    const pictureLike = pictureLink.querySelector('.picture__likes');
    pictureLike.textContent = photos[i].likes;

    const pictureComment = pictureLink.querySelector('.picture__comments');
    pictureComment.textContent = photos[i].id;

    pictureLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(photos[i]);
    });
  });

  pictures.appendChild(pictureFragment);
}

export { renderPhotos };
