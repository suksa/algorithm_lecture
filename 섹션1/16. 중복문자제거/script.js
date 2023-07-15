const { log } = console

function solution(str) {
    let answer
    let arr = []
    
    for (a of str) {
        if (!arr.includes(a)) {
            arr.push(a)
        }
    }
    answer = arr.join('')
    
    return answer
}

log(solution('ksekkset'))