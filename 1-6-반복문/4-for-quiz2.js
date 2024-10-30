let num = prompt('정수 입력:');
let result ='';
let count = 0
for(i = 1 ;i<=num; i++){
  if(num % i === 0){
    result += `${i} `;
    count ++;
  }
} alert(`${result} 약수의 개수:${count}`);

