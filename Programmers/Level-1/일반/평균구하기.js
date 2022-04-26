function solution(arr) {
    return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

// 배열 전체 합의 평균
let output = solution([1, 2, 3, 4]);
console.log(output);