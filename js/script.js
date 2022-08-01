"use strict";

/*const answers = [];
answers[0] = prompt('Как Ваше імя?', '');*/

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {} ,
    actors: {} ,
    genres: [] ,
    privat: false
};

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

if (personalMovieDB.count < 10) {                                          // ответ пользователя меньше 10
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {    // ответ от 10 вкл до 30 не вкл
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {                                  // ответ от 30 вкл и больше
    console.log('Вы киноман');
} else {                                                                   
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);