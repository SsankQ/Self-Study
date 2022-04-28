// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.


function solution(participant, completion) {

    // 시간 초과
    // for(let i = 0; i < completion.length; i++) {
    //     if(participant.includes(completion[i])) {
    //         let idx = participant.indexOf(completion[i]);
    //         participant.splice(idx, 1);
    //     }
    // }
    // return participant[0];

    // 2.
    participant.sort();
    completion.sort();   
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}

let output = solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
console.log(output);