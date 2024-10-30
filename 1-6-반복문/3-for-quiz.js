let num = prompt('정수 입력:')
let result = '';
for(let i= 2; i <= num; i *= 2 ){
    
  result += `${i} `
 
}  alert(`${result}`);