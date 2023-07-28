const { log } = console

function solution(num) {
    let answer
    let dy = new Array(num).fill(0)
    dy[0] = 1
    dy[1] = 2

    for (let i = 2; i < num; i += 1) {
        dy[i] = dy[i - 1] + dy[i - 2]
    }

    log(dy)

     
    
    return answer = dy[num-1]
}

log(solution(7))