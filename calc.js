
function percent() {
   const result = (inputResult.value * calc.saveValue) / 100;

   inputResult.value = result;
}


function split(value1, value2) {
    if (value2 == 0) {
        return "Error"
    } else {
        return value1 / value2;
    }
}

function multi(value1, value2) {
    return value1 * value2;
}

function minus(value1, value2) {
    return value1 - value2;
}

function plus(value1, value2) {
    return value1 + value2;
}

function positiveNegative() {
    let string = '';
    if (inputResult.value > 0) {
        string = "-" + inputResult.value
    } else {
        string = inputResult.value * -1;
    }
    inputResult.value = Number(string)
}

