// left와 right 사이의 모든 수 중에 약수의 개수가 짝수인 수는 더하고, 홀수인 수는 뺀 수 return
// function solution(left, right) {
//     const numOfDiv = (num, arr = []) => {
//         for(let i = 1; i <= num; i++) {
//             if(num % i === 0) arr.push(i);
//         }
//         return arr.length % 2 === 0; 
//     }
    
//     let result = 0;
//     for(let i = left; i <= right; i++) {
//         numOfDiv(i) ? result += i : result -= i;
//     }
//     return result;
// }

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

let left = 13, right = 17;
let output = solution(left, right);
console.log(`${left}와 ${right} 사이의 약수의 덧/뺄셈의 합은 ${output}입니다`)