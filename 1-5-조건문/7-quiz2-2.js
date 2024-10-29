
// let num1 = prompt('정수 A')
// let num2 = prompt('정수 B')
// let num3 = prompt('정수 C')

// if (num1 < num2 && num1 <num3){
//   alert(`최소값은 ${num1}`)
// }
// else if(num2 < num1 && num2 ){
//   alert(`최소값은 ${num2}`)
// }
// else if(num3 < num1 && num3 < num2){
//   alert(`최소값은 ${num3}`)
// }
// else{
//   alert(`최소값은 ${num1}`)
// }
let a = 15;
let b = 8;
let c = 8;

// 가장 작은 수 찾기
let min = a;
if (b < min){
  min = b;
}
if (c < min){
  min = c
}


console.log(`최소값: ${min}`);
