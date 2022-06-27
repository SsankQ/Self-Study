// N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

const num = input.shift();
const sortedArr = input.sort((a, b) => a - b);

for (let i = 0; i < num; i++) {
  console.log(sortedArr[i]);
}
