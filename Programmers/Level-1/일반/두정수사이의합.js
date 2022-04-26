function solution(a, b) {
    let sum = 0
    for(let i = Math.min(a, b) ; i <= Math.max(a, b); i++) {
        sum += i
    }
    return sum;
}

let output = solution(3, 5)
console.log(output);