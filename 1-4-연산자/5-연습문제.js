// 문제1

let x =10;
let y = 3;

console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); //30
console.log(x % y); // 1
console.log(x ** 3); 




console.log('====================');

let num1 = '100';
let num2 = 100;

console.log(num1 == num2);  //true
console.log(num1 === num2); //false
console.log(num1 != num2);  //false
console.log(num1 !== num2); //true

console.log('========================');

let a = 5;
let b = 10;

let result1 = (a> 3 ) && (b > 15);        //false
let result2 = (a === 5) || (b === 20);    //true    <- a는 5랑 같거나 (or)  b는 20이랑 같다 즉 하나만 true 면 true
let result3 = !(a < 6);                   //false

console.log(result1);
console.log(result2);
console.log(result3);



