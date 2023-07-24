const { log } = console

function solution(argArr) {
    let answer = argArr.map(v => +(String(v[0]) + v[1])).sort((a, b) => a - b).map(v => ([Math.floor(v / 10), v % 10]))

    return answer
}

log(solution([[2,7],[1,3],[1,2],[2,5],[3,6]]))