import { getRandomString, getRandomInteger } from './utils.js';

const descriptions = [
  'Отель Eden Хорватия',
  'Указатель Сходи на пляж',
  'Симиланские острова',
  'Девушка на пляже',
  'Тайский суп',
  'Черный матовый Maclaren 650S',
  'Сервировочные тарелки',
  'Сок',
  'Винтомоторный летательный аппарат',
  'Подставка для обуви',
  'Ауди RS5',
  'Суперфуд',
  'Котосуши',
  'Гигантские тапочки-роботы',
  'Земля',
  'Концерт',
  'Антикварный автомобиль',
  'Тапочки с фонариком',
  'Отель Long Beach',
  'Тайская курица в мультиварке',
  'Закат',
  'Краб',
  'Рок-концерт',
  'Спортивный внедорожник',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я подскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Федя', 'Яна', 'Николай', 'Ксения', 'Иван', 'Слава'];

const comments = [];
for (let i = 1; i <= 15; i++) {
  comments.push(makeComments(i));
}

const photos = [];
for (let i = 1; i <= 25; i++) {
  photos.push(makePhotoDescription(i));
}

function makeComments(id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomString(messages),
    name: getRandomString(names),
  };
}

function makePhotoDescription(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomString(descriptions),
    likes: getRandomInteger(15, 200),
  };
}

export { photos, comments };
