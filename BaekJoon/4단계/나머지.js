const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let array = input.map((el) => el % 42);

// 중복 제거를 위한 Set 객체
let set = new Set(array);
const result = [...set];

console.log(result.length);
