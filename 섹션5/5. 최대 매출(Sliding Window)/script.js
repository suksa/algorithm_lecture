const { log } = console

function solution(num, arg) {
    let answer = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arg.length - num; i += 1) {
        let sum = arg.slice(i, i + num).reduce((a, b) => a + b)
        answer = Math.max(answer, sum)
    }

    
    return answer
}

log(solution(3, [12,15,11,20,25,10,20,19,13,15]))