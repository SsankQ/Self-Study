const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = parseInt(input[0].split(" ")[0]);
const b = parseInt(input[0].split(" ")[1]);
const c = parseInt(input[1]);

let h = 0;
let m = 0;

h = Math.floor((a * 60 + b + c) / 60);
m = (a * 60 + b + c) % 60;
if (h >= 24) {
  h -= 24;
}
console.log(`${h} ${m}`);
