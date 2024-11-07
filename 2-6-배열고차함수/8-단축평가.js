/*
filter: numbers 배열에서 10보다 큰 숫자만 걸러내기.
map: people 배열에서 각 사람의 이름만 추출하여 새로운 배열 만들기.
reduce: numbers 배열의 모든 숫자의 합 계산하기.
*/

const numbers = [5, 12, 8, 130, 44];
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 }
];

const m1 = numbers.filter((num) => num > 10);
console.log(m1);

const m2 = people.map((people) => people.name);
console.log(m2);

const m3 = numbers.reduce((acc, cur) => acc + cur , 0);
console.log(m3);



/*
filter: people 배열에서 30세 이상인 사람들만 걸러내기.
map: numbers 배열의 각 숫자를 제곱하여 새로운 배열 만들기.
reduce: people 배열에서 모든 사람의 나이 합계 구하기.
*/

const m4 = people.filter((people) => people.age >=30 );
console.log(m4);

const m5 = numbers.map((num)=> num ** 2)
console.log(m5);

const m6 = people.reduce((acc,cur)=> acc+cur.age ,0);
console.log(m6);

/*
filter: 이름에 알파벳 "a"가 포함된 사람만 걸러내기 (people 배열).
map: people 배열에서 "이름: 나이" 형식의 문자열 배열로 변환하기.
reduce: numbers 배열에서 최댓값을 찾기.
*/

const m7 = people.filter((user)=> user.name ==='?a?');
console.log(m7);
