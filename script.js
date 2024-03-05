let number;
let number2;
let operator;

function add(a, b, c){
    return a + b;
}

function subtract(a, b, c){
    return a - b;
}

function multiply(a, b , c){
    return a * b;
}

function divide(a, b, c){
    return a / b;
}
function operate(operator, number, number2){

}

const calc = document.getElementById("calc");
const button1 = document.createElement("button");
const button2 = document.createElement("button");

calc.appendChild(button1)
calc.appendChild(button2)

button1.style.width = "20px";
button1.style.height = "20px";
button2.style.width = "20px";
button2.style.height = "20px";



