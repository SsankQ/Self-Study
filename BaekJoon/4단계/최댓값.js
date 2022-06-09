const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let num = input[0];
let idx = 0;

for (let i = 1; i < input.length; i++) {
  if (num < input[i]) {
    num = input[i];
    idx = i;
  }
}

console.log(num);
console.log(idx + 1);
