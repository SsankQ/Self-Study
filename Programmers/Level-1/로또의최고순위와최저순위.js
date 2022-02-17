function solution(lottos, win_nums) {
    const getRank = (matchNum) => {
    let rank = [6, 5, 4, 3, 2, 1];
        for(let i = 6; i >= 1; i--) {
            if(matchNum >= 2) {
                if(matchNum === i) {
                    return rank[i - 1]
                }
            }
            else return 6;
        }
    }

    let maxCount = 0, minCount = 0;

    for(let i = 0; i < lottos.length; i++) {
        if(win_nums.includes(lottos[i])) {
            maxCount++;
            minCount++;
        }
        if(lottos[i] === 0) {
            maxCount++;
        }
    }
    return [getRank(maxCount), getRank(minCount)]
}

let output = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
console.log(`현재 확인한 번호로 추정 가능한 로또 최고 순위는 ${output[0]}위이고 최저 순위는 ${output[1]}위입니다`);