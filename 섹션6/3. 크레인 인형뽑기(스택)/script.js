const { log } = console

function solution(board, move) {
    let answer = 0
    let stack = []

    move.forEach((v, i) => {
        for (let a of board) {
            const t = a[v - 1]
            if (t !== 0) {
                a[v - 1] = 0

                if (stack.at(-1) === t) {
                    stack.pop()
                    answer += 2
                } else {
                    stack.push(t)
                }
                break
            }
        }
    })
    
    return answer
}

log(solution([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
], [1,5,3,5,1,2,1,4]))