const { log } = console

function solution(arr) {
    let answer = []

    arr.forEach(v => {
        if ([1, -2].includes(v[0] - v[1])) {
            answer.push('A')
        } else if ([-1, 2].includes(v[0] - v[1])) {
            answer.push('B')
        } else {
            answer.push('D')
        }
    });
    
    return answer
}

log(solution([[2,1],[3,1],[3,2],[1,2],[3,3]]))