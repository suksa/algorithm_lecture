const { log } = console

function solution(a) {
    let answer = 0
    for (;a > 0; a-=1) {
        answer += a
    }
    
    return answer
}

// log(solution(6))
log(solution(10))