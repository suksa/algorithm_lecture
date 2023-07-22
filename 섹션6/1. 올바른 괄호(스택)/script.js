const { log } = console

function solution(str) {
    let answer = 'NO'
    let stack = []

    for (let i = 0, a; a = str[i]; i +=1) {
        if (a === ')' && stack.at(-1) === '(') {
            stack.pop()
        } else {
            stack.push(a)
        }
    }
    if (stack.length === 0) {
        answer = 'YES'
    }
    
    return answer
}

// log(solution(`(()(()))(()`))
log(solution(`(()()((((()()()()(()()()())()()))))((((((())))))))`))