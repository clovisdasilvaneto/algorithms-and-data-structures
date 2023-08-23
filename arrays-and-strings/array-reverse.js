const input1 = [1,2,3,4,5,6,7,8]
const input2 = [1,2,3,4,5,6,7]

const reverse = (arr) => {
    for(let i = 0; i < arr.length / 2; i++) {
        const old = arr[i];
        
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = old
    }

    return arr
}

console.log(reverse(input1))
console.log(reverse(input2))