// 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

const input = require("fs").readFileSync("/dev/stdin").toString();

const result = input
  .split("")
  .sort((a, b) => b - a)
  .join("");

console.log(Number(result));
