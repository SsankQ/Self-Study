// 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//! 시간초과

// const [num1, cards, num2, list] = input;
// const cardList = cards.split(" ");
// const listOfNums = list.split(" ");

// let result = [];
// for (let i = 0; i < listOfNums.length; i++) {
//   let num = listOfNums[i];
//   if (cardList.includes(num)) {
//     result.push(1);
//   } else {
//     result.push(0);
//   }
// }

// console.log(result.join(" "));
