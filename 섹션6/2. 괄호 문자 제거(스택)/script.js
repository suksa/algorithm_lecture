const { log } = console

function solution(str) {
    let answer

    let stack = []

    for (let i = 0, a; a = str[i]; i += 1) {
        if (a === ')') {
            const lastTargetIndex = stack.findLastIndex(v => v === '(')
            stack.splice(lastTargetIndex, i)
        } else {
            stack.push(a)
        }
        
    }

    answer = stack.join('')

    return answer
}

log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))