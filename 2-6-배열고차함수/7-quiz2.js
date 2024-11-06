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
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2023,
    value: 120000,
  },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

const m1 = traders
  .filter((user) => user.year === 2023 && user.trader.city === "대전")
  .reduce((total,user) => total += user.value, 0)

console.log(`총액 : ${m1}`);

// let totalInDaejeon2023 = 0;

// for (const trs of traders) {
//   if (trs.year === 2023 && trs.trader.city === '대전') {
//     totalInDaejeon2023 += trs.value;
//   }
// }

const totalInDaejeon2023 = traders
  .filter((trs) => trs.year === 2023 && trs.trader.city === '대전')
  .reduce((total, trs) => total + trs.value, 0);

console.log(`총액 ${totalInDaejeon2023}원`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const m2 = traders
  .filter((user) => user.trader.city === "부산")
  .map((user) => user.trader.name);
console.log(m2);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

const m3 = traders.sort((a, b) => b.value - a.value).map(trs => ({ trader: trs.trader, value: trs.value }));
const firstArray = m3[0];

console.log(firstArray);
//

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
  
const m4 = traders.reduce((cityObj, trs) =>{
      city = trs.trader.city;
      if (cityObj[city] === undefined){
        cityObj[city] = trs.value;
      }else{
        cityObj[city] += trs.value;
      }
      return cityObj;
} ,{});
console.log(m4);






// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
console.log('=========5번===========');

const m5 = traders
.filter((user) => user.value >= 700000)
.reduce((yearObj , user) =>{
    year = user.year;
    if(yearObj[year] === undefined){
      yearObj[year] = [user];
    }else{
      yearObj[year].push(user);
    }
    return yearObj;
}
,{})
      console.log(m5);
      
// console.log(JSON.stringify(m5, null, 2));



// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**






// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**


// 8. **모든 거래 중 거래액이 중간값인
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**





// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

