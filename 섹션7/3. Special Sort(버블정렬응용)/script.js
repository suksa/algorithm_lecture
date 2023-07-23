const { log } = console

function solution(arr) {
    let answer

    for (let i = 0; i < arr.length - 2; i += 1) {
        for (let j = 0; j < arr.length - 1 - i; j += 1) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    answer = arr
    
    return answer
}

log(solution([1,2,3,-3,-2,5,6,-6]))