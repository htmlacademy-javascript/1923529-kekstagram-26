import { body } from './big-picture.js';
import { isEscapeKey } from './utils.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAG_NUMBERS = 5;
const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onFormEscKeydown);
    uploadFile.value = '';
  }
};

function setFormCloseHandler() {
  uploadCancel.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onFormEscKeydown);
    uploadFile.value = '';
  });
}

function setFormChangeHandler() {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onFormEscKeydown);
  });
}

function onHashTagInputValid() {
  const hashTagArray = hashtagInput.value.toLowerCase().trim().split(' ');
  const uniqueHashTagArray = new Set(hashTagArray);

  if (hashTagArray.length > MAX_HASHTAG_NUMBERS) {
    hashtagInput.setCustomValidity(
      `Хэш-тегов не должно быть больше чем ${MAX_HASHTAG_NUMBERS}`
    );
    hashtagInput.reportValidity();
    return;
  } else {
    hashtagInput.setCustomValidity('');
  }

  if (hashTagArray.length !== uniqueHashTagArray.size) {
    hashtagInput.setCustomValidity('Хэш-теги не должны повторяться');
    hashtagInput.reportValidity();
    return;
  } else {
    hashtagInput.setCustomValidity('');
  }

  for (let i = 0; i < hashTagArray.length; ++i) {
    if (!HASHTAG_VALID_REGEX.test(i)) {
      hashtagInput.setCustomValidity(
        `Хэш-тег должен начинается с символа # (решётка)

        Хэш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.`
      );
      break;
    }
  }

  hashtagInput.reportValidity();
}

hashtagInput.addEventListener('input', onHashTagInputValid);

hashtagInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

export { setFormChangeHandler, setFormCloseHandler };
