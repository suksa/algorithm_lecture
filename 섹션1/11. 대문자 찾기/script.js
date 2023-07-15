const { log } = console

// 아스키(charCodeAt) 소문자 97 ~ 122 대문자 65 ~ 90
// 차이 32 알아두면 좋을 듯
// 아스키 코드 변환은 String.fromCharCode(code)

function solution(str) {
    let answer = 0
    // let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // for (b of str) {
    //     if (a.includes(b) ){
    //         answer += 1
    //     }
    // }

    for (b of str) {
        if (b === b.toUpperCase()){
            answer += 1
        }
    }
    
    return answer
}

log(solution('KoreaTimeGood'))