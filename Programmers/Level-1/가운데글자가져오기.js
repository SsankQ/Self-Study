function solution(s) {
    let half = Math.floor(s.length / 2)
    
    return s.length % 2 === 0 ? s[half - 1] + s[half] : s[half];
}

let output = solution('qwer')
console.log(output)