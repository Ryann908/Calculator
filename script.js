let number;

function add(a, b){
    return parseInt(a) + parseInt(b);
}

function subtract(a, b){
    return parseInt(a) - parseInt(b);
}

function multiply(a, b){
    return parseInt(a) * parseInt(b);
}

function divide(a, b){
    if (parseInt(b) !== 0){
    return parseInt(a) / parseInt(b);
    } else {
        return "undefined";
    }
}
const calc = document.getElementById("calc");
const displayValue = document.getElementById("screen");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const button7 = document.createElement("button");


displayValue.style.fontSize = "23px";
for(let i = 0;i < 10; i++){
    const button1 = document.createElement("button");
    calc.appendChild(button1)
    button1.style.width = "80px";
    button1.style.height = "80px";
    button1.textContent = i;
    button1.addEventListener('click', () => {
        displayValue.textContent += i;
    });  
}

button5.addEventListener('click', () => {
    if (displayValue.innerText.includes("+") == false) {
    displayValue.textContent += " + ";
    }
});
button2.addEventListener('click', () => {
    if (displayValue.innerText.includes("/") == false) {
    displayValue.textContent += " / ";
    }
});
button3.addEventListener('click', () => {
    if (displayValue.innerText.includes("*") == false) {
    displayValue.textContent += " * ";
    }
});
button4.addEventListener('click', () => {
    if (displayValue.innerText.includes("-") == false) {
    displayValue.textContent += " - ";
    }
});
button6.addEventListener('click', () => {
    if (displayValue.innerText.includes("+") == true) {
        number = displayValue.innerText.split("+");
    }
    if (displayValue.innerText.includes("-") == true) {
        number = displayValue.innerText.split("-");
        }
    if (displayValue.innerText.includes("*") == true) {
        number = displayValue.innerText.split("*");
        }
    if (displayValue.innerText.includes("/") == true) {
        number = displayValue.innerText.split("/");
        }
    if (displayValue.innerText.includes("=") == false) {
    displayValue.textContent += " = ";
    } 
    if (displayValue.innerText.includes("+") == true) {
        displayValue.textContent = add(number[0], number[1]);
    }
    if (displayValue.innerText.includes("-") == true) {
        displayValue.textContent = subtract(number[0], number[1]);
    }
    if (displayValue.innerText.includes("*") == true) {
        displayValue.textContent = multiply(number[0], number[1]);
    }
    if (displayValue.innerText.includes("/") == true) {
        displayValue.textContent = divide(number[0], number[1]);
    }
});









calc.appendChild(button2);
calc.appendChild(button3);
calc.appendChild(button4);
calc.appendChild(button5);
calc.appendChild(button6);
calc.appendChild(button7);
button2.textContent = "/";
button3.textContent = "*";
button4.textContent = "-";
button5.textContent = "+";
button6.textContent = "=";
button7.textContent = "AC";

button2.style.width = "80px";
button2.style.height = "80px";
button3.style.width = "80px";
button3.style.height = "80px";
button4.style.width = "80px";
button4.style.height = "80px";
button5.style.width = "80px";
button5.style.height = "80px";
button6.style.width = "80px";
button6.style.height = "80px";
button7.style.width = "200px";
button7.style.height = "80px";


button7.addEventListener('click', () => {
    displayValue.textContent = "";
});



    
    
