const { log } = console

function solution(str) {
    let answer = ''

    // str.split('').forEach(v => {
    //     answer += v === 'A' ? '#' : v
    // });

    answer = str.replace(/A/g, '#')
    
    return answer
}

log(solution('BANANA'))