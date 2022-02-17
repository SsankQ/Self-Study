// 매개변수로 주어지는 n을 x로 나눈 나머지가 1이 되는 수들 중 가장 작은 x의 값 return
function solution(n) {
    for(let i = 1; i <= n; i++) {
        if(n % i === 1) return i;
    }
}

let output = solution(10);
console.log(output);