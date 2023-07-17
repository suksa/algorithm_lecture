const { log } = console

// let p1, p2 사용해서 하는게 투포인트..

function solution(arr1, arr2) {
    let answer = []

    let sumLength = arr1.length + arr2.length
    
    for (let i = 0; i < sumLength; i+=1) {
        if (arr1[0] < arr2[0]) {
            answer.push(arr1.splice(0, 1)[0])
        } else {
            answer.push(arr2.splice(0, 1)[0])
        }
    }
    
    return answer
}

log(solution([1,3,5], [2,3,6,7,9]))