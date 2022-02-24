// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 으로 가린 문자열을 리턴

function solution(phone_number) {
    
    let len = phone_number.length;
    let str = '*'.repeat(len - 4);
    let num = '';
    
    for(let i = 0; i < 4; i++) {
        num += phone_number[len - 4 + i]
    }
    
    return str + num;
}

let output = solution("01033334444");
console.log(output);