const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const num = Number(input);

let result = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
