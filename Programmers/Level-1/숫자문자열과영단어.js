function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < numbers.length; i++) {
        let temp = s.split(numbers[i]);
        s = temp.join(i);
    }
    
    return Number(s);
}

let output = solution("one4seveneight");
console.log(output)