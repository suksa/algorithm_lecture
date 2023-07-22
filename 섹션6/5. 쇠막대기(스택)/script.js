const { log } = console

function solution(str) {
    let answer = 0
    let stack = []

    for (let i in str) {
        if (str[i] === '(') {
            stack.push('(')
        } else if (str[i - 1] === '(') {
            // 레이저 끝
            stack.pop()
            answer += stack.length
        } else {
            // 막대기 끝
            stack.pop()
            answer += 1
        }
    }
    
    return answer
}

log(solution('(((()(()()))(())()))(()())'))