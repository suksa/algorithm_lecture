const { log } = console

function solution(arg1, arg2) {
    // let answer = ''

    // for (let i=0,a;a=arg1[i];i+=1) {
    //     let cnt = 0

    //     if (a === arg2) {
    //         answer += '0'
    //     } else {
    //         repeat()
    //     }
    //     function repeat() {
    //         cnt += 1
    //         let prev = arg1[i - cnt]
    //         let next = arg1[i + cnt]

    //         if ([prev, next].includes(arg2)) {
    //             answer += String(cnt)
    //             cnt = 0
    //         } else {
    //             repeat()
    //         }
    //     }
    // }

    let answer = []
    let cnt = 100
    for (let i=0,a;a=arg1[i];i+=1) {
        if (a === arg2) {
            cnt = 0
        } else {
            cnt +=1
        }
        answer.push(cnt)
    }

    cnt = 100
    for (let i=arg1.length-1,a;a=arg1[i];i-=1) {
        if (a === arg2) {
            cnt = 0
        } else {
            cnt +=1

            if (answer[i] > cnt) {
                answer[i] = cnt
            }
        }
    }
    
    return answer
}

log(solution('teachermode', 'e'))