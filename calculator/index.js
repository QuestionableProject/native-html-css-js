const calculatorInput = document.querySelector('main input');

const Clear = () => {
    calculatorInput.value = ""
    if (stash.number) {
        stash.number = ""
        stash.expression = ""
        document.querySelector(".stash").innerHTML = '';
    }
}
const ClearOne = () => {
    if (calculatorInput.value[calculatorInput.value.length - 1] == "+" ||
        calculatorInput.value[calculatorInput.value.length - 1] == "/" ||
        calculatorInput.value[calculatorInput.value.length - 1] == "*" ||
        calculatorInput.value[calculatorInput.value.length - 1] == "-") {
        stash.expression = ""
    }
    calculatorInput.value = calculatorInput.value.slice(0, -1)
}
let stash = {
    number: "",
    expression: ""
};
const Input = (number) => {

    if (number == "÷") number = "/"

    if (number == "+" || number == "-" || number == "*" || number == "/") {
        if (stash.expression) return false
        if (!calculatorInput.value) return false
        if (calculatorInput.value[calculatorInput.value.length - 1] == "+" ||
            calculatorInput.value[calculatorInput.value.length - 1] == "/" ||
            calculatorInput.value[calculatorInput.value.length - 1] == "*" ||
            calculatorInput.value[calculatorInput.value.length - 1] == "-") {
            calculatorInput.value = calculatorInput.value.slice(0, -1)
        }
        stash.number = calculatorInput.value;
        stash.expression = number;
        document.querySelector('.stash').insertAdjacentHTML('afterbegin', `
            <div class="number">${stash.number}</div>
            <div class="expression">${stash.expression}</div>
        `)
        calculatorInput.value = ""
        return false
    }
    calculatorInput.value += number
}

const Computing = () => {
    let number2 = calculatorInput.value
    let compiling;
    switch (stash.expression) {
        case "/":
            compiling = stash.number / number2
            calculatorInput.value = compiling
            break;
        case "+":
            compiling = stash.number + number2
            calculatorInput.value = compiling
            break;
        case "*":
            compiling = stash.number * number2
            calculatorInput.value = compiling
            break;
        case "-":
            compiling = stash.number - number2
            calculatorInput.value = compiling
            break;

        default:
            break;
    }
    document.querySelector('.stash').insertAdjacentHTML('beforeend', `<div class="number2">${number2}</div>`)
}
