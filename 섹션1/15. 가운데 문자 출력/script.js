const { log } = console

function solution(str) {
    let answer

    let harf = Math.floor(str.length / 2)
    let isOdd = str.length%2 === 1

    if (isOdd) {
        answer = str[harf]
    } else {
        answer = str.substr(harf - 1, 2)
    }
    
    return answer
}

log(solution('stuady'))