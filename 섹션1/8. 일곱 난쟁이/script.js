const { log } = console

// break 가 없어서 foreach는 별로네

function solution(arr) {
    let answer
    let sum = arr.reduce((acc, v) => acc + v, 0)
    let gap = sum - 100

    arr.forEach((v, i) => {
        arr.slice(i + 1).forEach((vv, ii) => {
            if (v + vv === gap) {
                answer = arr.filter((vvv) => {
                    return ![v, vv].includes(vvv)
                })
            }
        })
    });
    
    return answer
}

log(solution([20,7,23,19,10,15,25,8,13]))