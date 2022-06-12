// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("/dev/stdin");
const n = Number(input);

const aux = (n) => {
  const arr = Array.from(n.toString());
  let temp = null;
  for (let i = arr.length; i > 0; i--) {
    if (temp === null) {
      temp = arr[i] - arr[i - 1];
      continue;
    }
  }
  if (arr[i] - arr[i - 1] !== temp) {
    return false;
  }
  return true;
};

let count = 0;
for (let i = 0; i <= n; i++) {
  if (aux(i)) count++;
}

console.log(count);
