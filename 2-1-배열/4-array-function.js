

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
  foodList.push('hi');
}
console.log(foodList);


console.log('===========================');
let number = [0 , 1 , 2 , 3 , 4 , 5 , 6];

let slicedNumbers = number.slice(1, 3);
console.log('slicedNumbers', slicedNumbers);


let copy1 = number.slice(3) //end 생략시 끝까지 분할
console.log(copy1);

let copy2 = number.slice(); //둘다 생략시 처음부터 끝까지 복제
console.log(copy2);
 

//slice() : 배열을 우너하는 만큼 분할해서 복사배열로 리턴


