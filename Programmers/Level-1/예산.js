function solution(d, budget) {
    let sorted = d.sort((a, b) => a - b);
    let count = 0, sum = 0;
    
    for(let i = 0; i < sorted.length; i++) {
        sum += d[i];
        if(sum > budget) break;
        count++;
    }
    
    return count;
}

let output = solution([1, 3, 2, 5, 4], 9)
console.log(output);