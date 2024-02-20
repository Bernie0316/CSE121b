// W06: Final Project
// Declare and initialize global variables
const inputSelectElement = document.querySelector('#inputselect'); // from select 標籤
const inputElement = document.querySelector('#input'); // from input form
const outputSelectElement = document.querySelector('#outputselect'); // from select 標籤
const outputElement = document.querySelector('#output'); // from output form
let currencyList = []; // 帶入從api取得的data

// async getRate Function using fetch(from api) 
const getRate = async() => { 
    const response = await fetch('https://v6.exchangerate-api.com/v6/a109daadb5cf94415db72dcf/latest/USD');
    if (response.ok) {
        currencyList = await response.json();
    }
    else {
        console.error("Currency isn't found"); // 要用console.error('string')也是可以
    }
    // displayCurrency(currencyList);
};
// 計算匯率
const calculateExchange = (amount, fromCurrency, toCurrency, exchangeRate) => {
    // check if the currency in the api data
    if (!exchangeRate[fromCurrency] || !exchangeRate[toCurrency]) {
        console.error("Currency isn't found");
        return null; // null 表示回傳無效的值
    }
    // get the rate
    const fromRate = exchangeRate[fromCurrency];
    const toRate = exchangeRate[toCurrency];
    // calculte the rated price
    const convertedAmount = amount * (toRate / fromRate);
    return convertedAmount;
};
// get rate and exchange
const rateExchange = () => {
    const inputAmount = parseFloat(inputElement.value); // 獲取輸入的數字(可能會是含有小數點)
    const inputCurrency = inputSelectElement.value; // 獲取數入選擇的幣種
    const outputCurrency = outputSelectElement.value; // 獲取輸出選擇的幣種
    // 檢查 list裡有沒有conversion_rates屬性
    if (!currencyList.hasOwnProperty('conversion_rates')) {
        console.error('conversion rates ont found');
        return;
    }
    // 呼叫計算函式
    const result = calculateExchange(inputAmount, inputCurrency, outputCurrency, currencyList.conversion_rates);
    if (result !== null) {
        outputElement.value = result.toFixed(2);
    }
    else {
        outputElement.value = 'Currency error (rateExchange)';
    }
};

document.querySelector('#exchangerate').addEventListener('click', rateExchange);
getRate();
