function solution(dartResult) {
    let num = /^[0-9]*$/
    let score = 0;
    let scoreArr = [];

    for(let i = 0; i < dartResult.length; i++) {
        const len = scoreArr.length
        if(num.test(dartResult[i])) {
            score = num.test(dartResult[i - 1]) ? 10 : Number(dartResult[i])
        }
        if(dartResult[i] === 'S') scoreArr.push(score), score =0
        else if(dartResult[i] === 'D') scoreArr.push(score**2), score = 0
        else if(dartResult[i] === 'T') scoreArr.push(score**3), score = 0
        else if(dartResult[i] === '*') scoreArr[len - 2] *= 2, scoreArr[len - 1] *= 2
        else if(dartResult[i] === '#') scoreArr[len - 1] *= -1
    }
    return scoreArr.reduce((acc, cur) => acc + cur)
}

let output = solution('1S2D*3T');
console.log(output);