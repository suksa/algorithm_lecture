const { log } = console

function solution(num, numArr) {
    let answer = [numArr[0]]
    
    for (let i = 1; i < numArr.length; i+=1) {
        if (numArr[i - 1] < numArr[i]) {
            answer.push(numArr[i])
        }
    }

    return answer
}

log(solution(6, [7,3,9,5,6,12]))