let numbers = [10, 20, 30, 40];
console.log(typeof numbers);
console.log("numbers: ", numbers);

console.log(numbers[1]); //배열은 0이 첫번째 배열을 꺼내옴
console.log(numbers[2] ** 2);

//배열의 총 요소(데이터) 수
console.log(numbers.length);

// 배열의 마지막 요소 접근
console.log(numbers[numbers.length - 1]);
console.log("============================");

//배열의 순회 : 전체 데이터를 순차적으로 접근
for (let i = 0; i < numbers.length; i++) {
  console.log(`${i + 1}번째 데이터 : ${numbers[i]}`);
}

console.log("=================================");
//배열의 순회 전용 반복문

let weekDays = ["월", "화", "수", "목", "금", "토", "일"];

//for ~ of
// for(let day of weekDays){
//   console.log(`${day}요일`);        //코드는 짧으나 조건문에서는 사용하기 적합하지 않음

// }

for (let i = 0; i < weekDays.length; i++) {
  if (i % 2 === 0) {
    console.log(`${weekDays[i]}요일 `);
  }
}

// 배열 변수 이름 관례 : 복수형, -List 어미
let hobbies = ["스키", "요리"];
let hobbyList = ["스키", "요리"];
let hobbyArray;

// numbers[3]++;
// console.log(numbers[3]);

// numbers[0] = 999; //배열의 요소(element) 수정
