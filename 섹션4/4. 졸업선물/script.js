const { log } = console

function solution(money, mem) {
    let answer = []

    for (i in mem) {
        let arr = mem.map(v => [...v])
        arr[i][0] = arr[i][0] / 2

        let arr2 = arr.map(v => v.reduce((s,d) => s + d))
        arr2.sort((q,w) => q - w)
        let sum = 0
        for (j in arr2) {
            sum += arr2[j]
            if (sum <= money) {
                answer[i] = +j + 1
            } else {
                break
            }
        }
    }
    
    return Math.max(...answer)
}

log(solution(28, [[6,6],[2,2],[4,3],[4,5],[10,3]]))