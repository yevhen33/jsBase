'use strict';

let money = +prompt("Ваш бюджет за месяц?", ''),
    time = prompt("Введиде дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
    } else {
        console.log("not dot");
        i--;
    }
};

// цикл while

// let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//     } else {
//         console.log("not dot");
//         i--;
//     }
//     i++;
// }

// цикл do while

// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//     } else {
//         console.log("not dot");
//         i--;
//     }

//     i++;
// }
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
    console.log("Выше среднего уровня доствтка");
} else if (appData.moneyPerDay > 1000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Не верные данные");
}