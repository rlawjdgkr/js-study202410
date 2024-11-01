

let foodList = ['닭꼬치', '볶음밥', '족발', '파스타'];

//indexOf(): 배열의 특정 요소가 몇 번 인덱스에 있는지 알려줌
let idx = foodList.indexOf('볶음밥');
console.log(idx);

foodList[foodList.indexOf('족발')] = '보쌈';

console.log(foodList);


// includes() : 배열에 특정 요소가 있는지 유무 확인
let flag = foodList.includes('파스타');
console.log(flag);

if (foodList.includes('파스타')){

}
console.log(foodList);


console.log('===========================');
let number = [0 , 1 , 2 , 3 , 4 , 5 , 6];

let slicedNumbers = number.slice(1, 3);
console.log('slicedNumbers', slicedNumbers);

//slice() : 배열을 우너하는 만큼 분할해서 복사배열로 리턴

let copy1 = number.slice(3) //end 생략시 끝까지 분할
console.log(copy1);

let copy2 = number.slice(); //둘다 생략시 처음부터 끝까지 복제
console.log(copy2);
 

//splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능)
// 배열 원본이 손상됨  - 안전한 작업을 위해서는 복사하고서 작업
console.log('============================');
console.log(foodList);
foodList.splice(1,1, '마라탕')
console.log(foodList);

foodList.splice(2, 0 ,'짜장면')
console.log(foodList);
