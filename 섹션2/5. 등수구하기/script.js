const { log } = console

function solution(arr) {
    let answer = new Array(arr.length).fill(1)
    
    arr.forEach((v, i) => {
        arr.forEach(vv => {
            if (v < vv) {
                answer[i] += 1
            }
        });
    });


    return answer
}

log(solution([87,89,92,100,76]))