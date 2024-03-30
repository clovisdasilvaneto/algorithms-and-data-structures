const quickSort = (arr) => {
    if(arr.length <= 1) return arr

    const pivot = Math.floor(arr.length / 2);
    const left = [], right = []

    for(let i = 0; i < arr.length; i++) {
        if(i === pivot) continue;
        if(arr[i] <= arr[pivot]) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    let sort = []
    if(left.length) sort = [...quickSort(left)]
    
    sort.push(arr[pivot])

    if(right.length) sort = [...sort, ...quickSort(right)]

    return sort
}

const arr = [7,8,7,4,10,3,5]

console.log(quickSort(arr))