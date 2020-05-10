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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
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
    },
    chooseIncome: function() {
            let items = prompt("Что даст доп.доход? (Перечислите через запятую", '');

            if ((typeof(items)) != "string" || (typeof(items)) == null && items == '') {
                console.log("Введите верные данные");  
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt("Точно все?"));
                appData.income.sort();
            }

        appData.income.forEach(function(itemincome, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemincome);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);
}


