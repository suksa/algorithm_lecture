const { log } = console

function solution(argArr) {
    let answer = 0
    let temp = []
    let sum = 0

    argArr.forEach(v => {
        temp.push([v[0], 's'])
        temp.push([v[1], 'e'])
    });

    temp.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] === 'e') {
                return -1
            } else {
                return 1
            }
        } else {
            return a[0] - b[0]
        }
    })

    temp.forEach(v => {
        if (v[1] === 's') {
            sum += 1
        } else {
            sum -= 1
        }
        if (answer < sum) {
            answer = sum
        }
    });

    return answer
}

log(solution([[14,18],[12,15],[15,20],[20,30],[5,14]]))