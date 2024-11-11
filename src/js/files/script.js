// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Задание на урок - 19:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько оцените его?', ''),
  c = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько оцените его?', '');

(personalMovieDB.movies[a] = b), (personalMovieDB.movies[c] = d);
console.log(personalMovieDB);*/
/////////////////////////////////////////////////////////////////////////////
/* Задание на урок - 20,21 - Условия:*/

//////////////////////////////////////////////////////////////////////////////////////////////////
/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log('Ich bin sat!');
} else {
  console.log('Wir geht los!');
}
console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log((!1 && 2) || !3);

console.log(25 || (null && !3));

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || (null && !3 && undefined) || 5);

console.log((5 === 5 && 3 > 1) || 5);
*/

/*const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
  console.log('Done!');
}*/

/*let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
  console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  console.log('Done!');
}*/
//////////////////////////////////////////////////////////////////////////////////
/* Задание на урок - 23 - Цикл в цикле:*/
/*let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);

///////////////////////////////////////////////////
first: for (let i = 1; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first;
      console.log(`Third level: ${k}`);
    }
  }
}*/
/* Задание на урок - 24 - Цикл в цикле:*/

/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('Done');
  } else {
    console.log('Error');
    i--;
  }
}

console.log(personalMovieDB);
////////////////////////////////////////////////////////////
if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Error');
}

console.log(personalMovieDB);*/
////////////////////////////////////////////////////////////////////////////

/*let placeNum = parseInt(prompt('Place'));
let res;
switch (placeNum) {
  case 1:
    res = 'Gold';
    break;
  case 2:
    res = 'Silver';
    break;
  case 3:
    res = 'Bronze';
    break;
  default:
    res = 'Diplom';
    break;
}
alert(res);*/
//////////////////////////////////////////////////////////////////////////
/*let placeNum = parseInt(prompt('Place'));
if (placeNum === 1) alert('Gold medal');
else if (placeNum === 2) alert('Silver medal');
else if (placeNum === 3) alert('Bronze medal');
else alert('Diplom');*/

/*let tomatColor = prompt('Color tomat');
let res;
switch (tomatColor) {
  case 'red':
    res = 'You can eat';
    break;
  case 'yellow':
    res = 'Not yet';
    break;
  case 'green':
    res = 'Growing';
    break;
  default:
    res = 'Mutant';
    break;
}
alert(res);*/
//////////////////////////////////////////////////////////////
/* Задание на урок - 25 - Стрелочные ф-ции(ES6):*/
/*function showFirstMessage(text) {
  console.log(text);
}
showFirstMessage('Hello World!');

const logger = function () {
  console.log('Hello');
};
logger();

const calc = (a, b) => {
  return a + b;
};*/

/* Задание на урок - 26 - Аргументы ф-ций:
const usdT = 42;
const eurO = 45;

function convert(amount, curr) {
  console.log(amount * curr);
}
convert(500, usdT);
convert(500, eurO);*/

/* Задание на урок - 27 - Аргументы ф-ций:
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);
promotion(res);*/
/* Задание на урок - 29 - Практика ф-ций:*/

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done');
    } else {
      console.log('Error');
      i--;
    }
  }
}
//rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Error');
  }
}
//detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
