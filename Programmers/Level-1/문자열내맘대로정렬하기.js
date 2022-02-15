function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}

let output = solution(["sun", "bed", "car"], 1);
console.log(output);