const { log } = console

function solution(num, arr) {
    let answer = 0
    let p1 = 0
    let p2 = 1
    let temp = []
    let sum = 0

    for (let i = 0; i < arr.length - 1; i+=1) {
        debugger
        sum = arr.slice(i, p2 + 1).reduce((a, b) => a + b)

        if (sum === num) {
            answer += 1
        }
        while (sum < num) {
            p2 += 1
            sum = arr.slice(i, p2 + 1).reduce((a, b) => a + b)

            if (sum === num) {
                answer += 1
                break
            }
        }
    }
    return answer
}

log(solution(6, [1,2,1,3,1,1,1,2]))