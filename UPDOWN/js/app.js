// // ===============지역 변수 지정 ====================//

// let min = 1;
// let max = 100;

// //=========== DOM 가져오기 =================//

// const $numbers = document.getElementById('numbers');
// //정답일 때 나타나는 finish 아이디 
// const $finish = document.getElementById('finish');
// const $up = document.getElementById('up');
// const $down  = document.getElementById('down');
// const $begin = document.getElementById('begin');
// const $end = document.getElementById('end');
// const $icon = document.querySelector('.icon');
// // =================함수 호출 =====================//
// // 1부터 100까지의 번호를 생성
// for (let i = 1; i <= 100; i++) {
//   $numbers.innerHTML += `<div class="icon">${i}</div> `;
// }
// const randomNum = Math.floor(Math.random()*100 + 1);

// console.log(randomNum);


// //==================이벤트 발생 리스너 ===============//

// // div 안의 icon 클래스 이벤트 리스너 및 css 불러옴
// $numbers.addEventListener('click', e =>{
//   if(+e.target.textContent === randomNum){
//     $finish.classList.add('show');
    
//     $up.classList.remove('selected');
//     $down.classList.remove('selected');
    
//   }else if(+e.target.textContent < randomNum){
  
//     $up.classList.add('selected');
//     $down.classList.remove('selected');
  
    
//   }else{
//     $down.classList.add('selected');
//     $up.classList.remove('selected');
//   }
  
//   $numbers.classList.add('icon');
// });





//========== 전역 변수, 상수 영역 ==========//
const CLASS_SELECTED = 'selected'; // up down 애니메이션 효과 클래스

const secret = Math.floor(Math.random() * 100) + 1;
console.log(`secret: ${secret}`);

let min = 1;
let max = 100;


//========== DOM 가져오기 영역 ==========//
// 아이콘이 들어갈 컨테이너
const $numbers = document.getElementById('numbers');
const [$up, $down] = [...document.querySelector('.result').children];
const $finish = document.getElementById('finish');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');

// 숫자 아이콘을 생성하는 함수
function makeNewIcons() {
  // 기존 아이콘들을 모두 제거
  $numbers.innerHTML = '';
  for (let i = min; i <= max; i++) {
    const $div = document.createElement('div');
    $div.classList.add('icon');
    $div.textContent = i;

    $numbers.append($div);
  }
}

