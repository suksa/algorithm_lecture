const { log } = console

function solution(arr) {
    let answer = 0

    for (let i=0;i<arr.length;i+=1) {
        for (let j=0;j<arr.length;j+=1) {
            let arr2 = [0,0,0,0] // top, right, bottom, left
            arr2[0] = arr[i - 1]?.[j] || 0
            arr2[1] = arr[i][j + 1] || 0
            arr2[2] = arr[i + 1]?.[j] || 0
            arr2[3] = arr[i][j - 1] || 0

            if (Math.max(...arr2) < arr[i][j]) {
                answer += 1
            }
        }
    }
    
    return answer
}

log(solution([
    [5,3,7,2,3],
    [3,7,1,6,1],
    [7,2,5,3,4],
    [4,3,6,4,1],
    [8,7,3,5,2],
]))