const { log } = console

function solution(a, b) {
    let answer = 'YES'

    const map1 = new Map()
    const map2 = new Map()

    for (let i = 0; i < a.length; i+=1) {
        map1.set(a[i], (map1.get(a[i]) || 0) + 1)
        map2.set(b[i], (map2.get(b[i]) || 0) + 1)
    }

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            answer = 'NO'
            break
        }
    }
    
    return answer
}

log(solution('AbaAeCe', 'baeeACA'))
// log(solution('AbaAeCe', 'baeEACA'))