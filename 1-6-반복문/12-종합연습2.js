let questionNumber = 1;
let maxNumber, minNumber;

while (true) {
  let level = prompt(`---난이도를 설정해주세요 ---- [1. 상 | 2. 중 | 3. 하]`);

  if (level === "1") {
    maxNumber = 900;
    minNumber = 100;
    break;
  } else if (level === "2") {
    maxNumber = 90;
    minNumber = 10;
    break;
  } else if (level === "3") {
    maxNumber = 9;
    minNumber = 1;
    break;
  } else {
    alert("난이도를 다시 선택하세요");
    continue;
  }
}

let correct = 0;
let wrong = 0;   //전역변수 설정 이기 때문에 이 부분은 while문 밖으로 변수선언해야한다.

while (true) {
  let num1 = Math.floor(Math.random() * maxNumber) + minNumber;
  let num2 = Math.floor(Math.random() * maxNumber) + minNumber;
  let bu = Math.floor(Math.random() * 3);

 

  let operator;



  switch (bu) {
    case 0:
      operator = "+";
      break;
    case 1:
      if (num1 === num2) {
        continue;
      }
      operator = "-";
      break;
    case 2:
      operator = "*";
      break;
  }

  if (num1 < num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  let sum = num1 + num2;
  let mul = num1 * num2;
  let mis = num1 - num2;

  let qs = +prompt(`Q${questionNumber++}. ${num1} ${operator} ${num2} =`); // <- qustionNumber++ 을 prompt 안에서 사용 가능 cause: 후위 연산이기 때문에 처음에 변수로 1로 지정되어 있던 것 부터 나타나고 그 이후에 2 , 3, .. 로 증가함

  if (qs === 0) {
    alert("게임종료");
    break;
  }

  if (qs === sum || qs === mul || qs === mis) {
    alert("정답입니다!");
    correct++;
  } else {
    alert("틀렸습니다");
    wrong++;
  }
}

alert(`맞춘문제 ${correct} 틀린문제 ${wrong}`);

/*
    # v1.0 요구사항
    시스템은 1~10사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.

    # v1.1 요구사항

    종료시점에 시스템은 정답횟수와 오답횟수를 출력한다.

    # v1.2 요구사항

    덧셈이외에 뺄셈, 곱셈을 랜덤으로 추가 출제한다.

    # v1.3 요구사항

    난이도를 3가지 (상중하)로 설정하여
    상 난이도에서는 세자리수 사칙연산문제를 출제
    중 난이도는 두자리수
    하 난이도는 한자리수
*/
