
let a = 5;   // 5 -> 0101
let b = '5'; // 5 -> 53

// 모든 동등비교는 === , !== <- 3개 사용(js 한정)
console.log(a === b);
console.log(a !== b);


console.log('==============================');

// == 은 직관적으로 결과 예측이 어려움 (js기준)
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);


console.log('=========================');

//문자 비교
let password = 'abc1234';
console.log(password === 'abc1234');

//문자 대소 비교
          //97     65     <- 아스키 코드표 10진수 크기
console.log('a' > 'A');   //true
          //65    67
console.log('A' >'C');

console.log('가' >'나');

console.log('ace'> 'ade');      //알파벳 ascii 코드 대문자 보다 소문자가 더 높음 알파벳 순서대로 올라감  , 한글은 가나다라 순으로 높아짐


