const { log } = console

function solution(str) {
    let answer = 'NO'
    let str2 = str.toLowerCase()
    let reverse = str2.split('').reverse().join('')

    if (reverse === str2) {
        answer = 'YES'
    }
    
    return answer
}

log(solution('gdoodG'))