const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

const n = Number(input);

let answer = "";

for (let i = n; i > 0; i--) {
  answer += `${i}`;
}
console.log(answer);
