// 총 N개의 문자열로 이루어진 집합 S가 주어진다.
// 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((el) => Number(el));

//! 시간초과..

// let S = [],
//   target = [];
// for (let i = 1; i <= N; i++) {
//   S.push(input[i]);
// }
// for (let i = N + 1; i <= N + M; i++) {
//   target.push(input[i]);
// }

// let count = 0;
// for (let i = 0; i < S.length; i++) {
//   if (target.includes(S[i])) {
//     count++;
//   }
// }

// console.log(count);
