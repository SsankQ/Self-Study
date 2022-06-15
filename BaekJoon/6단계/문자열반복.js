// 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

// QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// for (let i = 0; i <= input.length; i++) {
//   let arr = input[i].split(" ");
//   let result = "";
//   for (let j = 0; j < arr[1].length; j++) {
//     result += arr[1][j].repeat(Number(arr[0]));
//   }
//   console.log(result);
// }

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = input.shift();

for (let i = 0; i < num; i++) {
  let result = "";

  const [times, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(times);
  }
  console.log(result);
}
