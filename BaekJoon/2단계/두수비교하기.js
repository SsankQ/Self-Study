// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = [input[0], input[1]];

if (A > B) console.log(">");
if (A < B) console.log("<");
if (A === B) console.log("==");
