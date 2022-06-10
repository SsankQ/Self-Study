const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num = input[0];
const scores = input[1]
  .split(" ")
  .map((el) => Number(el))
  .sort((a, b) => b - a);

const m = scores[0];
const resultScore = scores.map((score) => (score / m) * 100);

let sum = 0;
for (let i = 0; i < num; i++) {
  sum += resultScore[i];
}
console.log(sum / num);
