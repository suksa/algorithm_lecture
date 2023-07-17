const { log } = console

function solution(arg) {
    let answer = 0
    let max = 0
    
    arg.forEach(v => {
        const str = v.toString()
        let sum = 0
        str.split('').forEach(k => {
            sum += +k
        })

        if (max <= sum) {
            max = sum

            if (answer < v) {
                answer = v
            }
        }
    })

    return answer
}

log(solution([128,460,603,40,521,137,123]))