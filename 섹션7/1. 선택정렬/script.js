const { log } = console

function solution(arr) {
    let answer
    let index = 0

    for (a in arr) {
        index = a
        for (let i=+a+1;i<arr.length;i+=1) {
            if (arr[index] > arr[i]) {
                index = i
            }
        }
        if (a !== index) {
            const arrA = arr[a]
            arr[a] = arr[index]
            arr[index] = arrA
        }
    }
    log(arr)
    
    return answer
}

log(solution([13,5,11,7,23,15]))