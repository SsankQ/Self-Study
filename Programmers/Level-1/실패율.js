// 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지 수 N, 
// 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성

function solution(N, stages) {
    // 실패율 구하는 method
    const getFail = (stage, arr) => {
        let count = 0;
        for(let i = 0; i < arr.length; i++) {
            if(stage === arr[i]) count++
        }
        return { stage: stage, rate: count / arr.length };
    }

    let results = [];
    for(let i = 1; i <= N; i++) {
        results.push(getFail(i, stages))
        stages = stages.filter((stage) => stage > i)
    }
    return results.sort((a, b) => {
                return (a.rate > b.rate) ? -1 : 1
           }).map((result) => result.stage);
}

let output = solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
console.log(output);

let output2 = solution(4, [4,4,4,4,4]);
console.log(output2);