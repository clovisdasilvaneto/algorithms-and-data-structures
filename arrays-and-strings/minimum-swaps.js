// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let [index, total] = [0,0];
    
    while(index < arr.length) {        
        let num = arr[index];
        
        if(num === index + 1){
            index++;
        }else {
            let hold = arr[num - 1];
            arr[num - 1] = num;
            arr[index] = hold;
            total++;
        }
    }
    
    return total
}

const input = [7, 1, 3, 2, 4, 5, 6];

console.log(`The minimum amount of swaps is: ${(minimumSwaps(input))}`);