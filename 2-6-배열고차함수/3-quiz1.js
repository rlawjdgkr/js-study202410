const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수', 
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수', 
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수', 
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
];


// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

// for(const m1 of traders){
//   if(m1.year === 2022){    
//     console.log(m1.trader);    
//   }
// }


const m1 = traders
.filter(user => user.year ===2022)
.map(user => user.trader);
console.log(m1);



// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.

const ListArray = [];
for(const m2 of traders){
  ListArray.push(m2.trader.city);
}
console.log(ListArray);


// const m2 = traders.map(user => user.trader.city);
// console.log(m2);



// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

// const m3 = traders
// .filter(user => user.trader.city ==='대전')
// .map(user => user.trader);
// console.log(m3);



// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.

const allTrader = traders.map(user => user.trader.name);
console.log(allTrader);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

// const m5 = traders
// .filter(user => user.trader.city ==='서울')
// .map(user => user.value);
// console.log(m5);
