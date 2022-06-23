// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const nums = input[1].split(" ").map((num) => Number(num));

let result = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) continue;
  else {
    let count = 0;
    for (let j = 2; j < nums[i]; j++) {
      if (nums[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      result++;
    }
  }
}

console.log(result);
