const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let result = input[i].split(" ");
  console.log(parseInt(result[0]) + parseInt(result[1]));
}
