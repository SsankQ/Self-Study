// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

function solution(n) {
    return (n + '').split('').reduce((a, b) => +a + +b, 0);
}

let output = solution(987);
console.log(output);
