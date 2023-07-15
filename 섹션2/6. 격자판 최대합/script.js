const { log } = console

function solution(arr) {
    let answer = 0
    let num1 = 0
    let num2 = 0
    
    arr.forEach((v, i) => {
        const sum = v.reduce((a, b) => a + b)
        if (answer < sum) {
            answer = sum
        }
        const sum2 = arr.reduce((a, b) => a + b[i], 0)
        if (answer < sum2) {
            answer = sum2
        }
        num1 += v[i]
        num2 += v[v.length - i -1]
    });
    if (answer < num1) {
        answer = num1
    }
    if (answer < num2) {
        answer = num2
    }

    return answer
}

log(solution(
    [
        [10,13,10,12,15],
        [12,39,30,23,11],
        [11,25,50,53,15],
        [19,27,29,37,27],
        [19,13,30,13,19],
    ]
))