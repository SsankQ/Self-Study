// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

//! 오답

// function solution(n, lost, reserve) {
//     let sortedL = lost.sort((a, b) => a - b);
//     let sortedR = reserve.sort((a, b) => a - b);

//     for(let i = 0; i < sortedL.length; i++) {
//         let prev = sortedL[i] - 1;
//         let next = sortedL[i] + 1;
//         if(sortedL.length === 0) {
//             return n;
//         }
//         if(sortedR.includes(prev)) {
//             sortedR.splice(sortedR.indexOf(prev), 1);
//             sortedL.splice(sortedL[i], 1);
//             continue;
//         }
//         if(sortedR.includes(next)) {
//             sortedR.splice(sortedR.indexOf(next), 1);
//             sortedL.splice(sortedL[i], 1);
//             continue;
//         } else n--;
//     }
//     return n;
// }

//! 테스트케이스 2개..오답 ㅠㅠ
function solution(n, lost, reserve) {
  let cnt = n - lost.length;
  let lostArr = [];

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((el) => el !== lost[i]);
      cnt++;
    } else {
      lostArr.push(lost[i]);
    }
  }
  lost = lostArr;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      reserve = reserve.filter((el) => el !== lost[i] - 1);
      cnt++;
    } else if (reserve.includes(lost[i] + 1)) {
      reserve = reserve.filter((el) => el !== lost[i] + 1);
      cnt++;
    }
  }

  return cnt;
}
