const { log } = console

function solution(str, char) {
    let answer = 0
    
    // str.split('').forEach(v => {
    //     if (v === char) {
    //         answer += 1
    //     }
    // });

    answer = str.split(char).length - 1
    
    return answer
}

log(solution('COMPUTERPROGRAMMING', 'R'))