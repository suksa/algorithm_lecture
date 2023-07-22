const { log } = console

function solution(people, num) {
    let answer

    let queue = new Array(people).fill('').map((v, i) => i + 1)
    let count = 1

    while (queue.length !== 1) {
        if (count === num) {
            queue.shift()
            count = 1
        } else {
            queue.push(queue.shift())
            count += 1
        }
    }
    
    answer = queue[0]

    
    return answer
}

log(solution(8, 3))