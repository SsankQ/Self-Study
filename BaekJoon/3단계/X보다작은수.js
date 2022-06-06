const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(input[0].split(" ")[0]);
const num2 = parseInt(input[0].split(" ")[1]);
const numArr = input[1].split(" ");

let result = [];

for (let i = 0; i < num; i++) {
  if (numArr[i] < num2) {
    result.push(numArr[i]);
  }
}

console.log(result.join(" "));
