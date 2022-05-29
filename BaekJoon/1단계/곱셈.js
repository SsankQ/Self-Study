const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const num1 = Number(input[0]);
const num2 = Number(input[1]);

const one = num2 % 10;
const ten = Math.floor((num2 % 100) / 10);
const hundred = Math.floor(num2 / 100);

console.log(num1 * one);
console.log(num1 * ten);
console.log(num1 * hundred);
console.log(num1 * num2);
