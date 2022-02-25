function solution(a, b) {
    const date = new Date(`${a} ${b} 2016`);
    const dayOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    return dayOfTheWeek[date.getDay()]
}

let output = solution(5, 24);
console.log(output);
