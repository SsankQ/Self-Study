// 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
// X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("/dev/stdin").toString();
const num = Number(input);

let line = 0,
  max = 0;

while (max < num) {
  line++;
  max += line;
}

let idx = num - (max - line);
let numerator, denominator; // 분자 분모

if (line % 2 === 0) {
  numerator = idx;
  denominator = line + 1 - numerator;
} else {
  numerator = line + 1 - idx;
  denominator = line + 1 - numerator;
}

console.log(`${numerator}/${denominator}`);
