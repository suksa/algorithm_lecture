const { log } = console

function solution(arg) {
    let answer = ''

    for (let i=0,a;a=arg[i];i+=1) {
        if (!isNaN(Number(a))) {
            answer += a
        }
    }
    
    return +answer
}

log(solution('g0en2T0s8eSoft'))