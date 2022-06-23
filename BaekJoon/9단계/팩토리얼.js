// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("/dev/stdin").toString();
const num = Number(input);

const factorial = (number) => {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
};

console.log(factorial(num));
