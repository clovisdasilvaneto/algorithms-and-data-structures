const samples = [1,3,6, 8, 9, 10, 55, 56, 58, 59, 70, 100, 105, 108];

const search = (value, sample) => {
    const binarySearch = (value, left, right) => {
        const middle = parseInt((left + right) / 2);

        if(left === middle && sample[left] !== value) return -1;
        if(left === middle && sample[left] === value) return left;

        if(sample[middle] > value) return binarySearch(value, left, middle);

        return binarySearch(value, middle, right)
    }

    return binarySearch(value, 0, sample.length)
}

console.log(search(58, samples))