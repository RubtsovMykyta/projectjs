"use strict";

//const answers = [];
//answers[0] = prompt('Как Ваше імя?', '');


let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {   // при пустой строке будет возвращать
    numberOfFilms = +prompt('-отвечайте правильно- Сколько фильмов Вы уже посмотрели?', '');  // null - при отмене, 
  }                                                                                   //если в строке указано не цифры
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
      } else {
          console.log('error');
          i--;
      }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {                                          // ответ пользователя меньше 10
    console.log('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {    // ответ от 10 вкл до 30 не вкл
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {                                  // ответ от 30 вкл и больше
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB);

function writeYourGenres() { 
  for (let i = 1; i <= 3; i++) { //3 раза будет задавать вопрос начиная с 1
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);  // вопрос который будет задавать
    personalMovieDB.genres[i - 1] = genre;  // записывает полученные данные в базу обьекта 
  }                                         // -1 указываем что бы отображалось у нас как с нуля
}

writeYourGenres();

console.log(personalMovieDB);
