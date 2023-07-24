const { log } = console

function solution(argArr) {
    let answer = []

    let sortArr = [...argArr].sort((a, b) => a - b)

    for (let a in argArr) {
        if (argArr[a] !== sortArr[a]) {
            answer.push(+a + 1)
        }
    }
    
    return answer
}

log(solution([120,125,152,130,135,135,143,127,160]))
log(solution([120,130,150,150,130,150]))