function solution(array, commands) {
    const aux = (arr, i, j, k) => {
        return arr.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    }
    
    return commands.map((command) => {
        return aux(array, command[0], command[1], command[2]);
    })
}

let output = solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);
console.log(output);