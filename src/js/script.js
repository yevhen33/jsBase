'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет за месяц?", '');
    time = prompt("Введиде дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет за месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// функция расходов
function chooseExpenses() {
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
    }
}
chooseExpenses();

// функция для определения ежедневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

// функция для определения уровня достатка
function detectLevel() {
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
}
detectLevel();

// функция для определения дохода с депозита
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();

// функция для необязательных расходов
function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let q = prompt("Статья необязательных расходов?", "");

        if ( (typeof(q))==="string" && (typeof(q)) != null && q != '' && q.length < 30) {
            console.log("Подходит");
            appData.optionalExpenses[i] = q;
            console.log(appData.optionalExpenses);
        } else {
            console.log("Перепроверить данные");
            i--;
        }
        
    }
}
chooseOptExpenses();
