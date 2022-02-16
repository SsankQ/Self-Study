function solution(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i + 1]) result.push(arr[i]);
    }
    return result;
}

let output = solution([1,1,3,3,0,1,1]);
console.log(output)