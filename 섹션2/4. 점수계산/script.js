const { log } = console

function solution(arr) {
    let answer = 0
    let acc = 0

    arr.forEach(v => {
        if (v === 1) {
            answer += 1 + acc
            acc += 1
        } else {
            acc = 0
        }
    });

    
    return answer
}

log(solution([1,0,1,1,1,0,0,1,1,0]))