const { log } = console

function solution(arg) {
    let answer
    let sum = 0
    let min = Number.MAX_SAFE_INTEGER

    for (let i=0,a;a=arg[i];i+=1) {
        if (a%2 === 1) {
            sum += a
            if (min > a) {
                min = a
            }
        }
    }

    answer = [sum, min]

    return answer
}

log(solution([12,77,38,41,53,92,85]))