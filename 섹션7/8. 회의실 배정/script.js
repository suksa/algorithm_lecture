const { log } = console

function solution(argArr) {
    let answer

    let sortArr = argArr.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })
    
    let result = new Array(argArr.length).fill(0)

    for (let i = 0, a; a = sortArr[i]; i += 1) {
        let temp = 0
        for (let j = i, b; b = sortArr[j]; j += 1) {
            if (temp <= b[0]) {
                temp = b[1]
                result[i] += 1 
            }
        }
    }

    return answer = Math.max(...result)
}

// log(solution([ [1, 4], [2, 3], [3, 5], [4, 6], [5, 7] ]))
log(solution([ [3, 3], [1, 3], [2, 3], [3, 5], [3, 4]]))