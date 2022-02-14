function solution(n) {
    let reversedTernary = n.toString(3).split('').reverse().join('');
    
    return parseInt(reversedTernary, 3);
}

let output = solution(125);
console.log(output);