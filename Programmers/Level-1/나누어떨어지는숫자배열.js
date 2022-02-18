function solution(arr, divisor) {
    const filtered = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b)
    return !filtered.length ? [-1] : filtered;
}

let output = solution([5, 9, 7, 10], 5)
console.log(output);