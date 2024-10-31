

let Rand = Math.floor(Math.random() * 10) + 1;
let life = 5;

// for (let i = 0; i <= life; i--) {}
while (life > 0) {
  let num = prompt("정수:");
    if (num === Rand) {
      alert(`정답`);
      break;      
    } 
    else if (num > Rand) {
      alert("down");
    }else  if(num < Rand){
      alert("up");
    }
    
    life-- ;
    if(life > 0){
      alert(`기회는${life}번`);
    }
    else(life === 0){
      alert('게임 끝!');
    }
  }

