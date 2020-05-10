'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for ( let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

    if (typeof(a) == "string" && a != null && a != "" && b != null && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

// еще два цикла 

// let i = 0;
// while (i < 2) {
//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (typeof(a) == "string" && a != null && a != "" && b != null && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// do {
//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//     if (typeof(a) == "string" && a != null && a != "" && b != null && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     } else {
//         i--;
//     }
// }
// while (i < 2);

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
