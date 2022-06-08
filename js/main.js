function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    // Вводимые значения не должны быть отрицательными
  } else if (max <= min) {
    // Значение 'до' не может быть меньше либо рано значению 'от'
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

getRandomInteger();

function checkingMaxLenght(str, maxLenght) {
  if (str.Lenght > maxLenght) {
    return false;
  } else {
    return true;
  }
}

checkingMaxLenght();
