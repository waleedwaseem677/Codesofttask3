const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (!isNaN(button.textContent) || button.textContent === ".") {
            currentInput += button.textContent;
            display.value = currentInput;
        } else if (button.classList.contains("operator")) {
            if (currentInput !== "") {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else {
                    calculate();
                }
                currentInput = "";
                operator = button.textContent;
            }
        } else if (button === clearButton) {
            clear();
        } else if (button === calculateButton) {
            if (currentInput !== "" && firstOperand !== null) {
                calculate();
            }
        }
    });
});

function calculate() {
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
        case "+":
            firstOperand += secondOperand;
            break;
        case "-":
            firstOperand -= secondOperand;
            break;
        case "*":
            firstOperand *= secondOperand;
            break;
        case "/":
            firstOperand /= secondOperand;
            break;
    }
    display.value = firstOperand;
    currentInput = "";
    operator = "";
}

function clear() {
    currentInput = "";
    operator = "";
    firstOperand = null;
    display.value = "";
}
