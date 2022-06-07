const { Linter } = require("eslint");

function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    console.log("Вводимые значения не должны быть отрицательными");
  } else if (max <= min) {
    console.log("Значение 'до' не может быть меньше либо рано значению 'от'");
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const maxLine = 140;

function checkingMaxLenght(lenght, maxLine) {
  if (lenght.maxLine > maxLine) {
    return false;
  } else {
    return true;
  }
}
