const { log } = console

function solution(arr) {
    let answer = [arr[0]]

    arr.slice(1).forEach(v => {
        if (answer.at(-1) < v) {
            answer.push(v)
        }
    })

    return answer.length
}

log(solution([130,135,148,140,145,150,150,153]))