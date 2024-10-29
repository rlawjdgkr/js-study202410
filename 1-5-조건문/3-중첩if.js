
let height =prompt('키가 몇cm입니까?');


//키가 140이상, 나이가 7살 이상인 경우 놀이기구 탑승여부 출력

if (height >= 140){
  let age =prompt('나이가 몇살입니까')
  if (age >=8) {
    alert('탑승가능');
    
  }else{
    alert('나이때문에 탑승 불가능'); 
  }
  
}else{
  alert('키때문에 탑승 불가능');
  
}