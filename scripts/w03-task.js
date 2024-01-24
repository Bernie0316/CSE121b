/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    // document.querySelector('#sum').value = add(addNumber1, addNumber2);
    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;
    return sum
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2
}
const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    let difference = subtract(subtract1, subtract2);
    document.querySelector('#difference').value = difference;
    return difference
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
    let multiply1 = Number(document,querySelector('#factor1').value);
    let multiply2 = Number(document,querySelector('#factor2').value);
    // document.querySelector('#product').value = multiply(multiply1, multiply2);
    let multiply = multiply(multiply1, multiply2);
    document.querySelector('#product').value = multiply;
    return multiply
}
document.querySelector('#product').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;
const divideNumbers = () => {
    let divide1 = Number(document,querySelector('#dividend').value);
    let divide2 = Number(document,querySelector('divisor').value);
    let divide = divide(divide1, divide2);
    document.querySelector('#quotient').value = divide;
    return divide
}
document.querySelector('#quotient').addEventListener('click', divideNumbers)

/* Decision Structure */

const getTotalDue = () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let member = document.querySelector('#member').checked;
    if (member) {
        subtotal *= .85;
    }
    let totalSpan = document.querySelector('#total');
    totalSpan.textContent = `${subtotal.toFixed(2)}`;
    // totalSpan.textContent = `$${subtotal.toFixed(2)}`;
}
document.querySelector('#total').addEventListener('click', getTotalDue)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = array.join(', ');

/* Output Odds Only Array */
let Odds = document.querySelector('#odds');
const oddsFilter = array.filter(number => number % 2 != 0);
Odds.innerHTML = oddsFilter;
/* Output Evens Only Array */
let Evens = document.querySelector('#evens');
const evensFilter = array.filter(number => number % 2 == 0);
Evens.innerHTML = evensFilter;

/* Output Sum of Org. Array */
let Sum = document.querySelector('#sumOfArray');
const sumReduce = array.reduce((sum, number) => sum + number);
Sum.innerHTML = sumReduce;

/* Output Multiplied by 2 Array */
let multiplied = document.querySelector('#multiplied');
const multiplyMap = array.map(number => number * 2);
multiplied.innerHTML = multiplyMap;

/* Output Sum of Multiplied by 2 Array */
const SumOfMultiplied = document.getElementById("#sumOfMultiplied");
const sumOfMultiplied = multiplied.reduce((accumlator, currentValue) => accumlator + currentValue);
SumOfMultiplied.innerHTML = sumOfMultiplied;
