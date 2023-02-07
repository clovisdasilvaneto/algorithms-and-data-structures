
function larrysArray(A) {
    let counter = 0;
    
    for(let i = 1; i < A.length; i++) {
        for(let j = i; j >= 0; j--) {
            if(A[j] > A[i]) counter++;
        }
    }
    
    return counter % 2 === 0 ? "YES" : "NO"
}