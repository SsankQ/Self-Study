// 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const num = input.shift();
const coordinate = input.map((el) => el.split(" ").map((ele) => Number(ele)));

const sorted = coordinate
  .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
  .join("\n");

let result = sorted.replace(/,/g, " ");
console.log(result);
