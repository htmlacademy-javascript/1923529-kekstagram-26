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
  'тапочки с фонариком',
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
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Федя', 'Яна', 'Николай', 'Ксения', 'Иван', 'Слава'];

const photos = [];
for (let i = 1; i <= 25; i++) {
  photos.push(makePhotoDescription(i));
}

function getRandomInteger(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    // Вводимые значения не должны быть отрицательными Значение
    // Значение 'до' не может быть меньше либо равно значению 'от'
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function checkingMaxLenght(str, MAX_LENGHT) {
  if (str.Lenght > MAX_LENGHT) {
    return false;
  } else {
    return true;
  }
}

checkingMaxLenght();

function getRandomString(element) {
  return element[Math.floor(Math.random() * element.length)];
}

function makePhotoDescription(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomString(descriptions),
    likes: getRandomInteger(15, 200),
    comments: {
      id: id,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomString(messages),
      name: getRandomString(names),
    },
  };
}
