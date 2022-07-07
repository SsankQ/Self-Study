// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

//? ReadLine 형으로 문제 풀어보기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);

  if (num1 > 0 && num2 > 0) {
    console.log(1);
  } else if (num1 < 0 && num2 > 0) {
    console.log(2);
  } else if (num1 < 0 && num2 < 0) {
    console.log(3);
  } else if (num1 > 0 && num2 < 0) {
    console.log(4);
  }
});
