const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numbers = [];
input.forEach((n) => numbers.indexOf(n % 42) === -1 && numbers.push(n % 42));
console.log(numbers.length);
