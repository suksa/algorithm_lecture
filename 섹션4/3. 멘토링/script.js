const { log } = console

function solution(arg) {
    let answer = []
    let group = []

    for (let i=0;i<arg[0].length;i+=1) {
        for (let j=0;j<arg[0].length;j+=1) {
            if (i+1 !== j+1) {
                group.push([i+1, j+1])
            }
        }
    }
    group.forEach(v => {
        let flag = false
        for (k of arg) {
            const user1 = k.findIndex(j => j === v[0])
            const user2 = k.findIndex(j => j === v[1])
            if (user1 > user2) {
                flag = true
                break
            }
        }
        if (!flag) {
            answer.push(v)
        }
    })
    
    return answer.length
}

log(solution(
    [
        [3,4,1,2],
        [4,3,2,1],
        [3,1,4,2],
    ]
))