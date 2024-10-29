/*
let userName = prompt('당신의 이름은?')
let num2 = +prompt('당신의 나이는')
num2 = 2025 - num2
alert(`${userName}은 ${num2}년생이시군요?`);
*/

let userName = prompt('당신의 이름은?')
let userAge = prompt('당신의 나이는')

let currentYear = new Date().getFullYear();
let birthYear = currentYear - userAge + 1;
alert(`${userName}은 ${birthYear}년생이시군요?`);