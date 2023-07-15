const { log } = console

function solution(a,b,c,d,e,f,g) {
    let answer = Number.MAX_SAFE_INTEGER

    log(Number.MAX_SAFE_INTEGER)

    for (let i = 0, a; a = arguments[i]; i+=1) {
        if (a < answer) {
            answer = a
        }
    }
    
    return answer
}

log(solution(5,3,7,11,4,15,17))