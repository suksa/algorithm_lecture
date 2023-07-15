const { log } = console

function solution(a, b, c) {
    let answer = a
    
    if (a > b) {
        answer = b
    }
    if (answer > c) {
        answer = c
    }
    
    return answer
}

log(solution(2, 3, 1))