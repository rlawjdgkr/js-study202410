

//50 안에 있는 2의 배수를 출력하기
let result ='';
for(let i=2;  i<=50; i += 2){
  result += `${i} `
}
console.log(result);

// 1~50 사이 6의 배수 출력하기
for(num = 1 ; num <=50 ; num ++){
  if(num % 6 === 0){
  console.log(`1~50 사이 6의 배수: ${num}`);
  }
}
// 1~100사이 7의 배수이면서 14의 배수가 아닌 수 출력하기
for(b=1; b<=100; b++){
  if(b % 7 ===0 && b % 14 !== 0){
  console.log(`1~100사이 7의 배수이면서 14의 배수 아닌 수: ${b}`);
  }
}

// 1 ~ 7777 안에 있는 3의 배수 개수 알아내기
let i = 0
for(n = 1 ; n <= 7777; n++){
  if(n % 3 ===0){
  i++
  }
}
console.log(`1~7777안에 3의 배수의 개수는: ${i}`);


