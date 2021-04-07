document.addEventListener('DOMContentLoaded', () => {

    const numbers = document.querySelectorAll('.numbers');
    const buttons = document.querySelectorAll('.buttons');

    numbers.forEach((number) => {
        number.addEventListener('click', clickNumber)
    })

    buttons.forEach((button) => {
        button.addEventListener('click', clickOperator)
    })

    document.getElementById("clearEntry").addEventListener('click', clearEntry);
    document.getElementById("clear").addEventListener('click', clear);
    document.getElementById("dot").addEventListener('click', insertDot);
    document.getElementById("equal").addEventListener('click', calculate);
    document.getElementById("percent").addEventListener('click', percent);


})

const inputResult = document.getElementById("result");
let sub = true;

const calc = {
    values: [],
    saveValue: null,
    calcFunction: null
}

function clickNumber(event) {

    const number = event.target.textContent;

    if (sub || inputResult.value === "0") {
        inputResult.value = number;
        sub = false;
    } else {
        inputResult.value += number;
    }

}

function clickOperator(event) {

    const operator = event.target.textContent;

    calc.values.push(Number(inputResult.value));
    calc.saveValue = Number(inputResult.value);
    
    assignOperator(operator)
    sub = true;

    console.log(calc);

}

function calculate() {
    if (!isNaN(inputResult.value) && calc.calcFunction != null) {
        const result = calc.calcFunction(calc.saveValue, Number(inputResult.value));

        inputResult.value = result;
        calc.saveValue = result;
        sub = true;
        
    }
}


function assignOperator(operator) {
    if (operator == "+") {
        calc.calcFunction = plus;
    } else if (operator == "-") {
        calc.calcFunction = minus;
    } else if (operator == "x") {
        calc.calcFunction = multi;
    } else {
        calc.calcFunction = split;
    }
}

function clearEntry() {
    inputResult.value = 0;
    sub = true;
}

function clear() {
    calc.values = [];
    calc.saveValue = null;
    calc.calcFunction = null;
    inputResult.value = 0;
    sub = true;
}

function insertDot() {
    if (inputResult.value === "" || isNaN(inputResult.value)) {
        inputResult.value = "0.";
        
    } else if (!inputResult.value.includes('.')) {
        inputResult.value = inputResult.value + '.';
    }
    sub = false;
}