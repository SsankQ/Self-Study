// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) arr.push(i);
        else continue;
    }
    return arr.reduce((a, b) => a + b, 0);
}

let output = solution(12);
console.log(output);
