const { log } = console

function solution(a, b, c) {
    let answer

    const arr = [a, b, c]
    let max = 0
    if (a > b) {
        max = a
    } else {
        max = b
    }
    if (max < c) {
        max = c
    }
    // const arr2 = arr.filter(v => v !== max)
    // if (arr2[0] + arr2[1] > max) {
    //     answer = 'yes'
    // } else {
    //     answer = 'no'
    // }

    let sum = a + b + c
    if (sum - max > max) {
        answer = 'yes'
    } else {
        answer = 'no'
    }
    
    return answer
}

// log(solution(6, 7, 11))
log(solution(13, 37, 17))