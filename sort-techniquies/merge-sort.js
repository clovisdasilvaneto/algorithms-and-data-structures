const mergeSort = (arr) => {
    if(arr.length === 1) return arr;

    const chunks = Math.floor(arr.length  / 2)
    const arrOne = arr.slice(0, chunks)
    const arrTwo = arr.slice(chunks, arr.length)

    const left = mergeSort(arrOne);
    const right = mergeSort(arrTwo);

    if(left.length && right.length) {
        const sort = []
        
        let i = j = 0;

        while(sort.length < left.length + right.length) {
            if(i >= left.length || left[i] > right[j]) {
                sort.push(right[j])
                j++;
            }else {
                sort.push(left[i])
                i++;
            }
        }
        return sort;
    }else if(left.length) {
        return left
    }else {
        return right
    }
}

const temp = [7,4,10,8,5,7,3]

console.log(mergeSort(temp))