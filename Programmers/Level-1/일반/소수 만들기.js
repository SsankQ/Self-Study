function solution(nums) {
    // 1. 재귀 => 시간초과
//     let result = [];
//     const perm = (arr, num, temp = []) => {
//         if(num === 0) {
//             result.push(temp)
//             return;
//         }
//         for(let i = 0; i < arr.length; i++) {
//             let pickOne = arr[i]
//             let restArr = arr.slice(i + 1) 
//             perm(restArr, num - 1, temp.concat(pickOne))
//         }
//     }
    
//     perm(nums, 3);
    
//     const isPrime = (num) => {
//         for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
//             if(num % i === 0) return false;
//         }
//         return num > 1;
//     }
    
//     let count = 0, resultArr = [];
    
//     result.map((numArr) => {
//         let sum = numArr.reduce((acc, cur) => acc + cur)
//         if(isPrime(sum) && !resultArr.includes(sum)) {
//             resultArr.push(sum);
//             count++
//         }
//     })
    
//     return count;
    
    // 2.
    const isPrime = (num) => {
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])) {
                    count++;
                }
            }
        }
    }
    return count;
}