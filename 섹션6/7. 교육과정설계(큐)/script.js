const { log } = console

function solution(arg1, arg2) {
    let answer = 'NO'

    let arr = arg1.split('')
    let queue = arg2.split('')

    while (!([arr.length, queue.length].includes(0))) {
        if (queue[0] === arr[0]) {
            arr.shift()
        }
        queue.shift()
    }

    if (arr.length === 0) {
        answer = 'YES'
    }
    
    return answer
}

log(solution('CBAP', 'CNJIBDAPGE'))