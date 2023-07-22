const { log } = console

function solution(arg) {
    let answer
    let hm = new Map()

    for (let i=0;i<arg.length;i+=1) {
        const value = hm.get(arg[i]) || 0
        hm.set(arg[i], value + 1)
    }

    let max = Number.MIN_SAFE_INTEGER
    for (let [key, value] of hm) {
        if (max < value) {
            max = value
            answer = key
        }
    }

    
    return answer
}

log(solution('BACBACCACCBDEDE'))