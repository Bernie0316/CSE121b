/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Bernie Zhong'
let currentYear = new Date().getFullYear();
const profilePicture = 'images/IMG_0343.jpeg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
// 因為上面是getbyid 所以不用加# 下面沒有指定，但要抓id就需要加#
var yearElement = document.querySelector('#year');
// 最後這個因為html沒有設定id, class 所以要使用其他方法(我先試試看直接用元素名字)
var imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear; 
// ?
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
var array = ['Chocolate', 'Burger', 'Steak'];
foodElement.innerHTML = array;
array.push("Cheese")
foodElement.innerHTML += `<br>${array}</br>`;
array.pop(0)
foodElement.innerHTML += array;
array.pop()
foodElement.innerHTML += `<br>${array}</br>`

