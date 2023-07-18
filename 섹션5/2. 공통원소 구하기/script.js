const { log } = console

function solution(arr1, arr2) {
    let answer = []

    const a = arr1.sort((a, b) => a - b)
    const b = arr2.sort((a, b) => a - b)

    let p1 = 0
    let p2 = 0

    for (let i=0;i<a.length;i+=1) {
        // 작은값을 증가시키는게 point
        if (a[p1] > b[p2]) {
            p2 += 1
        } else if (a[p1] < b[p2]) {
            p1 += 1
        } else {
            answer.push(a[p1])
            
            p1 += 1
            p2 += 1
        }
    }
    
    return answer
}

log(solution([1,3,9,5,2], [3,2,5,7,8]))