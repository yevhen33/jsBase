'use strict';

const startBtn = document.getElementById("start"),
	  budgetValue = document.getElementsByClassName('budget-value')[0],
	  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	  levelValue = document.getElementsByClassName('level-value')[0],
	  expensesValue = document.getElementsByClassName('expenses-value')[0],
	  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	  incomeValue = document.getElementsByClassName('income-value')[0],
      monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
      yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	  expensesItem = document.getElementsByClassName('expenses-item'),
	  expensesBtn = document.getElementsByTagName('button')[0],
	  optionalExpensesBtn = document.getElementsByTagName('button')[1],
      countBtn = document.getElementsByTagName('button')[2],
      optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	  incomeItem = document.querySelector('.choose-income'),
	  checkSavings = document.querySelector('#savings'),
	  sumValue = document.querySelector('.choose-sum'),
      percentValue = document.querySelector('.choose-percent'),
      yearValue = document.querySelector('.year-value'),
      monthValue = document.querySelector('.month-value'),
	  dayValue = document.querySelector('.day-value');
	  


let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', () => {
	time = prompt("Введиде дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет за месяц?", '');
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет за месяц?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	expensesBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBtn.disabled = false;
});

expensesBtn.addEventListener('click', () => {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
	
		if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
				appData.expenses[a] = b;
				sum += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum.toFixed();
});

optionalExpensesBtn.addEventListener('click', () => {

	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let q = optionalExpensesItem[i].value;
			appData.optionalExpenses[i] = q;
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';		
	}
});

countBtn.addEventListener('click', () => {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(2);
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Низкий уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
			levelValue.textContent = "Выше среднего уровня доствтка";
		} else if (appData.moneyPerDay > 1000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Не верные данные";
		}
	} else {
		dayBudgetValue.textContent = 'Начните вводить данные';
	}
});

incomeItem.addEventListener('change', () => {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', () => {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', () => {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', () => {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum/100/12*percent;
		appData.yearIncome = sum/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

const appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
};
