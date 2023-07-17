const { log } = console



function solution(n, argArr) {
    let answer
    let arr = []

    for (i in argArr) {
        for (let j=+i+1;j<argArr.length;j+=1) {
            for (let k=j+1;k<argArr.length;k+=1) {
                arr.push(argArr[i] + argArr[j] + argArr[k]) // nse Set 사용하면 중복값 없이 바로 넣을 수 있었음
            }
        }
    }
    arr.sort((a,b) => b - a)
    let rank = 0
    let prevTop = Number.MAX_SAFE_INTEGER
    for (a of arr) {
        if (a < prevTop) {
            rank += 1
            prevTop = a
            if (rank === n) {
                answer = a
                break
            }
        }
    }
    
    return answer
}

log(solution(11, [13,15,34,23,45,65,33,11,26,42,14,54,75])) // 161