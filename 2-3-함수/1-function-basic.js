
/*
console.log('김철수님 안녕하세요!');
console.log('오늘도 즐거운 하루 되세요');

*/

//함수 : 코드의 모듈화와 재사용성을 높이기 위해 일반화(정규화) 하는 것

// 함수 정의 (define)

function sayHello(x){ //동사형
  console.log(`${x}님 hello`);
  console.log('오늘도 즐거운 하루 되세요!');
  
}
function makeLine(){
  console.log('===============================');
  

}
//함수는 정의한 것을 호출(call)할 때 실행된다!

sayHello('길동이');
makeLine();
sayHello('짹짹이')
makeLine();