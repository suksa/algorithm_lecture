const { log } = console

function solution(arg) {
    let answer = []

    for (a of arg) {
        const num = +(a.toString().split('').reverse().join(''))
        if (num === 1) {
            continue
        }
        let flag = false
        for (let i=2;i<(parseInt(num/2));i+=1) { // 반만 돌자
            if (num % i === 0) {
                flag = true
                break
            }
        }
        if (!flag) {
            answer.push(num)
        }
    }
    
    return answer
}

log(solution([32,55,62,20,250,370,200,30,100]))