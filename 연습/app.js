// DOM 생성
const $numbers  = document.getElementById('numbers');
const $finish = document.getElementById('finish');
const $up = document.getElementById('up');
const $down = document.getElementById('down');
const $begin = document.getElementById('begin')
const $end = document.getElementById('end')


// 1. 숫자 아이콘을 생성하는 함수

let min = 1;
let max = 100;

function makeNewIcons(){
  //기존 아이콘들을 모두 제거
  $numbers.innerHTML = '';
for(let i = min ; i <=max; i++){
  $numbers.innerHTML += `<div class ="icon">${i} </div>`;
 
  }
}

makeNewIcons(); //게임 첫 시작시 단 한번 호출하여 100개를 그리는 용도

const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);



$numbers.addEventListener('click' , e =>{
  if(!e.target.matches('.icon')){
    return;
  }

  const correct = +e.target.textContent;

  if(correct === randomNum){
    $finish.classList.add('show');
    e.target.setAttribute('id' , 'move')
  }else if(+correct <= randomNum){    //down인 경우
    $up.classList.add('selected');    
    $down.classList.remove('selected');    
    min = correct + 1;
    $begin.textContent = min;
  
    makeNewIcons();

  }else{
    $down.classList.add('selected'); //up인 경우
    $up.classList.remove('selected');
   
    max = correct -1;
    $end.textContent = max;
    makeNewIcons();
  }
  
  
  
});