function solution(s){
    const findStr = (str, target) => {
        str = str.toLowerCase();
        return str.split(target).length - 1
    }
    return !findStr(s, 'p') && !findStr(s, 'y') ? true : findStr(s, 'p') === findStr(s, 'y');
}

let output = solution("pPoooyY");
console.log(output);

let output2 = solution("Pyy");
console.log(output2)