//basic functions which the calculator will perform (add, subtract, multiply, divide)
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

//display the button numbers and add an event listener to each button which stores the click in a variable called userChoice
let userChoice = "";
let operator = "";
let firstChoice = "";
const seven = document.querySelector(".button1");
seven.textContent = "7";
seven.addEventListener('click', function(e) {
    userChoice += 7;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const eight = document.querySelector(".button2");
eight.textContent = "8";
eight.addEventListener('click', function(e) {
    userChoice += 8;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const nine = document.querySelector(".button3");
nine.textContent = "9";
nine.addEventListener('click', function(e) {
    userChoice += 9;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const division = document.querySelector(".button4");
division.textContent = "/";
division.addEventListener('click', function(e) {
    operator = "divide";
    firstChoice = userChoice;
    clearDisplay();
 });
const four = document.querySelector(".button5");
four.textContent = "4";
four.addEventListener('click', function(e) {
    userChoice += 4;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const five = document.querySelector(".button6");
five.textContent = "5";
five.addEventListener('click', function(e) {
    userChoice += 5;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const six = document.querySelector(".button7");
six.textContent = "6";
six.addEventListener('click', function(e) {
    userChoice += 6;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const multiplication = document.querySelector(".button8");
multiplication.textContent = "x";
multiplication.addEventListener('click', function(e) {
    operator = "times";
    firstChoice = userChoice;
    clearDisplay();
 });
const one = document.querySelector(".button9");
one.textContent = "1";
one.addEventListener('click', function(e) {
    userChoice += 1;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const two = document.querySelector(".button10");
two.textContent = "2";
two.addEventListener('click', function(e) {
    userChoice += 2;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const three = document.querySelector(".button11");
three.textContent = "3";
three.addEventListener('click', function(e) {
    userChoice += 3;
    displayNumber(userChoice);
    console.log(userChoice);
 });
const subtraction = document.querySelector(".button12");
subtraction.textContent = "-";
subtraction.addEventListener('click', function(e) {
    operator = "minus";
    firstChoice = userChoice;
    clearDisplay();
 });
const zero = document.querySelector(".button13");
zero.textContent = "0";
zero.addEventListener('click', function(e) {
    userChoice += "0";
    displayNumber(userChoice);
    console.log(userChoice);
 });
const clear = document.querySelector(".button14");
clear.textContent = "C";
clear.addEventListener('click', function(e) {
    clearDisplay();
    console.log(userChoice);
 });
//execute the operate function when "=" is pressed and reser the values of the parameters needed for the operate function to work
const equals = document.querySelector(".button15");
equals.textContent = "=";
equals.addEventListener('click', function(e) {
    displayNumber(operate(operator, firstChoice, userChoice));
    userChoice = 0;
    operator = "";
    firstChoice = 0;
 });
const addition = document.querySelector(".button16");
addition.textContent = "+";
addition.addEventListener('click', function(e) {
    operator = "plus";
    firstChoice = userChoice;
    clearDisplay();
 });

const display = document.querySelector(".display");
display.textContent = 0;

const displayNumber = function (userChoice) {
    display.textContent = `${userChoice}`;
}

//clears display and sets userChoice to 0
function clearDisplay() {
    display.innerHTML = "0";
    userChoice = 0
  }