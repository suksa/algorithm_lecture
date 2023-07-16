const { log } = console

function solution(str) {
    let answer
    let arr = []

    for (let i=0,a;a=str[i];i+=1) {
        const last = arr.at(-1)

        if (last?.[0] === a) {
            last[1] += 1
        } else {
            arr.push([a, 1])
        }
    }
    answer = arr.map(v => `${v[0]}${v[1] === 1 ? '' : v[1]}`).join('')
    
    return answer
}

log(solution('KKHSSSSSSSE'))