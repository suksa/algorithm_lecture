const { log } = console

function solution(argArr) {
    let answer
    let temp = []

    for (let i=0;i<72;i+=1) {
        argArr.forEach(v => {
            if (v[0] <= i && v[1] > i) {
                temp[i] = (temp[i] || 0) + 1
            }
        })
    }

    log(temp)
    
    return answer
}

log(solution([[14,18],[12,15],[15,20],[20,30],[5,14]]))