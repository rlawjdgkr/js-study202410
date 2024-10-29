
let num = 20;
let num2 = 10.0;
let address = '서울시';
let result = '10';


//타입이 다르면 연산불가
//암묵적 형 변환 (implicit type casting)
//숫자와 문자의 덧셈은 숫자를 자동으로 문자로 변경

console.log(num + result);
console.log(address + num);
//덧셈 제외 산술연산은 문자를 숫자로 변환시도한 후
// 덧셈 성공시 산술연산 수행 실패시 NaN출력
const operating = num + result;
console.log(typeof operating);

console.log(address - num);

let money = 5000;
let fruit = 사과;

if (money){
  console.log(`${money}를 살 수 있어요`);
  
}
