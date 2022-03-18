//basic functions which the calculator will perform (add, subtract, multiply, divide)
const add = function (num1, num2) {
    return parseInt(num1) + parseInt(num2);
};

const subtract = function (num1, num2) {
    return num1 - num2;
};
const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return num1 / num2;

};
//figure what to display if user hits = button multiple times
const operate = function (operator, num1, num2) {
    switch (operator) {
        case "plus":
            return add(num1, num2);
        case "minus":
            return subtract(num1, num2);
        case "times":
            return multiply(num1, num2);
        case "divide":
            if (divide(num1, num2) == Infinity) {
                return "NO CAN DO!"
            } else {
            return divide(num1, num2);
            }
        default:
            return " ";
    }
}

//generate a 4 x 4 grid of buttons inside the buttonContainer div
const buttonContainer = document.querySelector(".buttonContainer");
let numBox = 4;

buttonContainer.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
buttonContainer.style.gap = "1em";

for (let i = 1; i <= numBox * numBox; i++) {
    let newButton = document.createElement("button");
    newButton.classList.add(`button${i}`);
    buttonContainer.append(newButton);
}

//display the button numbers and add an event listener to each button which stores the click in a variable called operand
let operand = "";
let operator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;

const seven = document.querySelector(".button1");
seven.textContent = 7;
seven.addEventListener('click', function (e) {
    operand += "7";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    }  else {
        firstOperand = operand;
        displayNumber(operand);
        console.log(firstOperand);
        console.log(secondOperand);
        console.log(result);
    }
});
const eight = document.querySelector(".button2");
eight.textContent = 8;
eight.addEventListener('click', function (e) {
    operand += "8";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const nine = document.querySelector(".button3");
nine.textContent = 9;
nine.addEventListener('click', function (e) {
    operand += "9";
    operand = parseInt(operand);
    console.log(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const division = document.querySelector(".button4");
division.textContent = "/";
division.addEventListener('click', function (e) {
    operator = "divide";
    if (result) {
        firstOperand = result;
        displayNumber(firstOperand);
        operand = "";
    } else {
        firstOperand = operand;
        displayNumber(operand);
        operand = "";
    }
});
const four = document.querySelector(".button5");
four.textContent = 4;
four.addEventListener('click', function (e) {
    operand += "4";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const five = document.querySelector(".button6");
five.textContent = 5;
five.addEventListener('click', function (e) {
    operand += "5";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const six = document.querySelector(".button7");
six.textContent = 6;
six.addEventListener('click', function (e) {
    operand += "6";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const multiplication = document.querySelector(".button8");
multiplication.textContent = "x";
multiplication.addEventListener('click', function (e) {
    operator = "times";
    if (result) {
        firstOperand = result;
        displayNumber(firstOperand);
        operand = "";
    } else {
        firstOperand = operand;
        displayNumber(operand);
        operand = "";
    }
});
const one = document.querySelector(".button9");
one.textContent = 1;
one.addEventListener('click', function (e) {
    operand += "1";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const two = document.querySelector(".button10");
two.textContent = 2;
two.addEventListener('click', function (e) {
    operand += "2";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const three = document.querySelector(".button11");
three.textContent = 3;
three.addEventListener('click', function (e) {
    operand += "3";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const subtraction = document.querySelector(".button12");
subtraction.textContent = "-";
subtraction.addEventListener('click', function (e) {
    operator = "minus";
    if (result) {
        firstOperand = result;
        displayNumber(firstOperand);
        operand = "";
    } else {
        firstOperand = operand;
        displayNumber(operand);
        operand = "";
    }
});
const zero = document.querySelector(".button13");
zero.textContent = 0;
zero.addEventListener('click', function (e) {
    operand += "0";
    operand = parseInt(operand);
    if (operator == "plus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand + secondOperand;
    } else if (operator == "minus") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand - secondOperand;
    } else if (operator == "times") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand * secondOperand;
    } else if (operator == "divide") {
        displayNumber(operand);
        secondOperand = operand;
        result = firstOperand / secondOperand;
    } else {
        displayNumber(operand);
    }
});
const clear = document.querySelector(".button14");
clear.textContent = "C";
clear.addEventListener('click', function (e) {
    clearDisplay();
    console.log(firstOperand);
});
//execute the operate function when "=" is pressed and reser the values of the parameters needed for the operate function to work
const equals = document.querySelector(".button15");
equals.textContent = "=";
equals.addEventListener('click', function (e) {
    displayNumber(operate(operator, firstOperand, operand));
    operand = "";
    operator = null;
    result = null;
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(result);
});
const addition = document.querySelector(".button16");
addition.textContent = "+";
addition.addEventListener('click', function (e) {
    operator = "plus";
    if (result) {
        firstOperand = result;
        displayNumber(firstOperand);
        operand = "";
    } else {
        firstOperand = operand;
        displayNumber(operand);
        operand = "";
    }
});

const display = document.querySelector(".display");
display.textContent = 0;

const displayNumber = function (operand) {
    display.textContent = `${operand}`;
}

//clears display and sets operand to blank string
function clearDisplay() {
    operand = "";
    firstOperand = null;
    secondOperand = null;
    result = null;
    displayNumber(operand);
}