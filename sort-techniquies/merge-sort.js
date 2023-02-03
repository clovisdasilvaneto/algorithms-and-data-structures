const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;

    let middleIndex = Math.round(arr.length / 2);

    let leftArr = arr.splice(0, middleIndex)

    let leftSingle = mergeSort(leftArr);
    let rightSingle = mergeSort(arr);

    return [...leftSingle, ...rightSingle].sort();
}


const input = [5,3,2,1,6,4,7]
console.log(mergeSort(input))