const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
let result = "";

for (let i = 0; i < num; ++i) {
  let arr = input[i + 1].split(" ");
  let a = Number(arr[0]);
  let b = Number(arr[1]);
  result += `Case #${i + 1}: ${a} + ${b} = ${a + b}\n`;
}

console.log(result);
