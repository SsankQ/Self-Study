// 내적 => a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
function solution(a, b) {
    let result = 0;
    for(let i = 0; i < a.length; i++) {
        result += (a[i] * b[i])
    }
    return result;
}

let output = solution([1,2,3,4], [-3,-1,0,2]);
console.log(output);