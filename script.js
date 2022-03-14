const add = function (num1, num2) {
    return num1 + num2;
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

const operate = function (operator, num1, num2) {
    switch (operator) {
        case "plus":
            return add(num1, num2);
        case "minus":
            return subtract(num1, num2);
        case "times":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default: 
            return "ERROR";
    }
}

const buttonContainer = document.querySelector(".buttonContainer");

let numBox = 4;

buttonContainer.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
buttonContainer.style.gap = "1em";

  for (let i = 1; i <= numBox * numBox; i++) {
    const newButton = document.createElement("div");
    newButton.classList.add("button");
    newButton.classList.add(`button${i}`);
    newButton.style.border = "1px solid black";
    buttonContainer.append(newButton);
  }

//need to figure out how to display correct number on buttons
const seven = document.querySelector(".button1");
console.log(seven);
seven.textContent = "7";
const eight = document.querySelector(".button2");
eight.textContent = "8";
const nine = document.querySelector(".button3");
nine.textContent = "9";
const division = document.querySelector(".button4");
division.textContent = "/";
const four = document.querySelector(".button5");
four.textContent = "4";
const five = document.querySelector(".button6");
five.textContent = "5";
const six = document.querySelector(".button7");
six.textContent = "6";
const multiplication = document.querySelector(".button8");
multiplication.textContent = "x";
const one = document.querySelector(".button9");
one.textContent = "1";
const two = document.querySelector(".button10");
two.textContent = "2";
const three = document.querySelector(".button11");
three.textContent = "3";
const subtraction = document.querySelector(".button12");
subtraction.textContent = "-";
const zero = document.querySelector(".button13");
zero.textContent = "0";
const clear = document.querySelector(".button14");
clear.textContent = "C";
const equals = document.querySelector(".button15");
equals.textContent = "=";
const addition = document.querySelector(".button16");
addition.textContent = "+";