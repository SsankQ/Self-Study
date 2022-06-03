const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let count = Number(input[0]); // 테스트 케이스의 개수
  let numbers = [];

  // 테스트 케이스 개수만큼 각 케이스 배열 생성 후 numbers 배열에 할당
  for (let i = 1; i <= count; i++) {
    numbers.push(input[i].split(" "));
  }

  for (let i = 0; i < count; i++) {
    num1 = Number(numbers[i][0]);
    num2 = Number(numbers[i][1]);

    console.log(num1 + num2);
  }

  process.exit();
});
