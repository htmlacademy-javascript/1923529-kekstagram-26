function checkingMaxLenght(str, MAX_LENGHT) {
  if (str.lenght > MAX_LENGHT) {
    return false;
  } else {
    return true;
  }
}

checkingMaxLenght();

function getRandomInteger(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    // Вводимые значения не должны быть отрицательными Значение
    // Значение 'до' не может быть меньше либо равно значению 'от'
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function getRandomString(element) {
  return element[getRandomInteger(0, element.length - 1)];
}

export { getRandomInteger, getRandomString };
