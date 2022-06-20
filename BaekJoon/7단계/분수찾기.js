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
