const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = Number(input);

let i = 1;
let sum = 1;

while (sum < num) {
  sum += 6 * i;
  i++;
}

console.log(i);
