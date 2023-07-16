const { log } = console

function solution(str) {
    let answer = 'NO'
    let str2 = str.toLowerCase().replace(/[^a-z]/g, '')
    let reverse = str2.split('').reverse().join('')

    if (reverse === str2) {
        answer = 'YES'
    }
    
    return answer
}

log(solution('found7, time: study; Yduts; emit, 7Dnuof'))