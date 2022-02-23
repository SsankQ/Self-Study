function solution(s) {
    return s.split(' ').map(words => words.split('').map((word, idx) => 
        idx % 2 === 0 ? word.toUpperCase() : word.toLowerCase()).join('')).join(' ');
}

// "try hello world" => "TrY HeLlO WoRlD"
let output = solution("try hello world");
console.log(output);