const { log } = console

function solution(day, arr) {
    let answer = 0

    for (let i=0,a;a=arr[i];i+=1) {
        if (a%10 === day) {
            answer += 1
        }
    }
    
    return answer
}

// log(solution(3, [25,23,11,47,53,17,33]))
log(solution(0, [12,20,54,30,87,91,30]))