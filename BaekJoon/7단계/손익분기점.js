const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const margin = C - B;
const count = Math.floor(A / margin) + 1;

let result = margin <= 0 ? -1 : count;

console.log(result);
