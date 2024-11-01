
let petList = ['멍멍이', '야옹이', '짹짹이'];
console.log(petList);

//push(): 배열 맨 끝에 데이터 추가
petList.push('거북이','참새','호랑이');
console.log(petList);
console.log(petList.length);

//pop(): 배열 맨 끝 데이터 삭제
petList.pop();
petList.pop();
petList.pop();
let x = petList.pop();
console.log(x);


petList.push(x);
console.log(petList);


// shift(): 배열의 맨 첫데이터 삭제
// unshift(): 배열의 맨 첫데이터 추가
petList.unshift('뻘뻘이','호랑이');
petList.shift();
console.log(petList);
