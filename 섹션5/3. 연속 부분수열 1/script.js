const { log } = console

function solution(num, arr) {
    let answer = 0
    let p1 = 0
    let p2 = 1
    let sum = 0

    function repeat() {
        if (p2 === arr.length + 1) {
            return
        }
        const slice = arr.slice(p1, p2)
        sum = slice.reduce((a, b) => a + b)

        if (sum === num) {
            p1 += 1
            p2 += 1
            answer += 1
        } else if (sum > num) {
            p1 += 1
        } else if (sum < num) {
            p2 += 1
        }
        repeat()
    }
    repeat()
    return answer
}

log(solution(6, [1,2,1,3,1,1,1,2]))