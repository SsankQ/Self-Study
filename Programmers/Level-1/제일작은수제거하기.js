function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter(el => el > Math.min(...arr));
}

let output = solution([4, 3, 2, 1]);
console.log(output);